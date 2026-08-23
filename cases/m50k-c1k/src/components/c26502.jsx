import React from 'react';
const LABEL_26502 = 'component_26502';
export function Component26502({ value = 26502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26502, 'data-value': derived.doubled }, children);
}
export default Component26502;
