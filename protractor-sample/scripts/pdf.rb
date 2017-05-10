require 'pdf-reader'

pdf = "../data/pdf/Contrato2017900083.pdf"
txt = Array.new
seq1 = Array.new
# sec1 = "1. CREDORA"
# sec2 = "2. EMITENTE"

def break_section(pdfpath, sec1, sec2)
  reader = PDF::Reader.new(pdfpath)

  s1c = 0
  seq = Array.new

  reader.pages.each do |page|
    page.text.lines.each do |line|
      if (line.to_s.include?(sec1)) then
        s1c = 1
      end
      
      if (s1c==1) then
        if (!line.to_s.include?(sec1) && !line.to_s.include?(sec2)) then
          seq.push(line)
        end
      end

      if (line.to_s.include?(sec2)) then
        s1c = 0
      end      
    end
    #puts page.raw_content
  end
  seq.each do |linex|
    if (linex.strip! === '' || linex.strip!.to_s.include?("\n")) then
      seq.delete(linex)
    end  
  end
  return seq
end


def pdf_to_text(pdfpath)
  reader = PDF::Reader.new(pdfpath)
  txt = Array.new
  reader.pages.each do |page|
    page.text.lines.each do |line|
      txt.push(line)
    end
  end
  return txt
end


seq1 = break_section(pdf, "1. CREDORA", "2. EMITENTE")
puts pdf_to_text(pdf)