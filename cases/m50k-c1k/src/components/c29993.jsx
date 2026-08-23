import React from 'react';
const LABEL_29993 = 'component_29993';
export function Component29993({ value = 29993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29993, 'data-value': derived.doubled }, children);
}
export default Component29993;
