import React from 'react';
const LABEL_8482 = 'component_8482';
export function Component8482({ value = 8482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8482, 'data-value': derived.doubled }, children);
}
export default Component8482;
