import React from 'react';
const LABEL_8075 = 'component_8075';
export function Component8075({ value = 8075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8075, 'data-value': derived.doubled }, children);
}
export default Component8075;
