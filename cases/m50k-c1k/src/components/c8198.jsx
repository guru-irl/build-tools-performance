import React from 'react';
const LABEL_8198 = 'component_8198';
export function Component8198({ value = 8198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8198, 'data-value': derived.doubled }, children);
}
export default Component8198;
