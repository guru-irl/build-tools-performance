import React from 'react';
const LABEL_13894 = 'component_13894';
export function Component13894({ value = 13894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13894, 'data-value': derived.doubled }, children);
}
export default Component13894;
