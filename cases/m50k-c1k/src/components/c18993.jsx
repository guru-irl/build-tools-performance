import React from 'react';
const LABEL_18993 = 'component_18993';
export function Component18993({ value = 18993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18993, 'data-value': derived.doubled }, children);
}
export default Component18993;
