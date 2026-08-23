import React from 'react';
const LABEL_8203 = 'component_8203';
export function Component8203({ value = 8203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8203, 'data-value': derived.doubled }, children);
}
export default Component8203;
