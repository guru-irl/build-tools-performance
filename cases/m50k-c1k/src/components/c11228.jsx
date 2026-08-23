import React from 'react';
const LABEL_11228 = 'component_11228';
export function Component11228({ value = 11228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11228, 'data-value': derived.doubled }, children);
}
export default Component11228;
