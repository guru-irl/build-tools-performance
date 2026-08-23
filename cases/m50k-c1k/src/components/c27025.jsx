import React from 'react';
const LABEL_27025 = 'component_27025';
export function Component27025({ value = 27025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27025, 'data-value': derived.doubled }, children);
}
export default Component27025;
