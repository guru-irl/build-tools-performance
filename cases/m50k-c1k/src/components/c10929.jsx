import React from 'react';
const LABEL_10929 = 'component_10929';
export function Component10929({ value = 10929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10929, 'data-value': derived.doubled }, children);
}
export default Component10929;
