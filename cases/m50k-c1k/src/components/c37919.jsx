import React from 'react';
const LABEL_37919 = 'component_37919';
export function Component37919({ value = 37919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37919, 'data-value': derived.doubled }, children);
}
export default Component37919;
