import React from 'react';
const LABEL_6938 = 'component_6938';
export function Component6938({ value = 6938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6938, 'data-value': derived.doubled }, children);
}
export default Component6938;
