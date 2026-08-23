import React from 'react';
const LABEL_4558 = 'component_4558';
export function Component4558({ value = 4558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4558, 'data-value': derived.doubled }, children);
}
export default Component4558;
