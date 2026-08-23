import React from 'react';
const LABEL_42938 = 'component_42938';
export function Component42938({ value = 42938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42938, 'data-value': derived.doubled }, children);
}
export default Component42938;
