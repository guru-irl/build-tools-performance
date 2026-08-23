import React from 'react';
const LABEL_16929 = 'component_16929';
export function Component16929({ value = 16929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16929, 'data-value': derived.doubled }, children);
}
export default Component16929;
