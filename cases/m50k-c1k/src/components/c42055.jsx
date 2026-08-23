import React from 'react';
const LABEL_42055 = 'component_42055';
export function Component42055({ value = 42055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42055, 'data-value': derived.doubled }, children);
}
export default Component42055;
