import React from 'react';
const LABEL_7644 = 'component_7644';
export function Component7644({ value = 7644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7644, 'data-value': derived.doubled }, children);
}
export default Component7644;
