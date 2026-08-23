import React from 'react';
const LABEL_8864 = 'component_8864';
export function Component8864({ value = 8864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8864, 'data-value': derived.doubled }, children);
}
export default Component8864;
