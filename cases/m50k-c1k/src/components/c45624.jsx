import React from 'react';
const LABEL_45624 = 'component_45624';
export function Component45624({ value = 45624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45624, 'data-value': derived.doubled }, children);
}
export default Component45624;
