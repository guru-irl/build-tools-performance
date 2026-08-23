import React from 'react';
const LABEL_28086 = 'component_28086';
export function Component28086({ value = 28086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28086, 'data-value': derived.doubled }, children);
}
export default Component28086;
