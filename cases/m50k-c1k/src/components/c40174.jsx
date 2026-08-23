import React from 'react';
const LABEL_40174 = 'component_40174';
export function Component40174({ value = 40174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40174, 'data-value': derived.doubled }, children);
}
export default Component40174;
