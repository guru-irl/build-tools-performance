import React from 'react';
const LABEL_10852 = 'component_10852';
export function Component10852({ value = 10852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10852, 'data-value': derived.doubled }, children);
}
export default Component10852;
