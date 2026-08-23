import React from 'react';
const LABEL_42864 = 'component_42864';
export function Component42864({ value = 42864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42864, 'data-value': derived.doubled }, children);
}
export default Component42864;
