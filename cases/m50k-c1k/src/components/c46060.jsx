import React from 'react';
const LABEL_46060 = 'component_46060';
export function Component46060({ value = 46060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46060, 'data-value': derived.doubled }, children);
}
export default Component46060;
