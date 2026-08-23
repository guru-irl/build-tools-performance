import React from 'react';
const LABEL_28423 = 'component_28423';
export function Component28423({ value = 28423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28423, 'data-value': derived.doubled }, children);
}
export default Component28423;
