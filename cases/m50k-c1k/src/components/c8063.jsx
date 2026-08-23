import React from 'react';
const LABEL_8063 = 'component_8063';
export function Component8063({ value = 8063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8063, 'data-value': derived.doubled }, children);
}
export default Component8063;
