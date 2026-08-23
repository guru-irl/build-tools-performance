import React from 'react';
const LABEL_8764 = 'component_8764';
export function Component8764({ value = 8764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8764, 'data-value': derived.doubled }, children);
}
export default Component8764;
