import React from 'react';
const LABEL_11482 = 'component_11482';
export function Component11482({ value = 11482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11482, 'data-value': derived.doubled }, children);
}
export default Component11482;
