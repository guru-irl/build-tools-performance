import React from 'react';
const LABEL_7647 = 'component_7647';
export function Component7647({ value = 7647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7647, 'data-value': derived.doubled }, children);
}
export default Component7647;
