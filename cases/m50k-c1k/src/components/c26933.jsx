import React from 'react';
const LABEL_26933 = 'component_26933';
export function Component26933({ value = 26933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26933, 'data-value': derived.doubled }, children);
}
export default Component26933;
