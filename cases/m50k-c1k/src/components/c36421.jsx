import React from 'react';
const LABEL_36421 = 'component_36421';
export function Component36421({ value = 36421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36421, 'data-value': derived.doubled }, children);
}
export default Component36421;
