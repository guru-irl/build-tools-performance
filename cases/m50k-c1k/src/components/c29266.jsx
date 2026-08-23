import React from 'react';
const LABEL_29266 = 'component_29266';
export function Component29266({ value = 29266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29266, 'data-value': derived.doubled }, children);
}
export default Component29266;
