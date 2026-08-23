import React from 'react';
const LABEL_23929 = 'component_23929';
export function Component23929({ value = 23929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23929, 'data-value': derived.doubled }, children);
}
export default Component23929;
