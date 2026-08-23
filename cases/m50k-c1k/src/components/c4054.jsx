import React from 'react';
const LABEL_4054 = 'component_4054';
export function Component4054({ value = 4054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4054, 'data-value': derived.doubled }, children);
}
export default Component4054;
