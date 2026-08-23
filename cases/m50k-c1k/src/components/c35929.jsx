import React from 'react';
const LABEL_35929 = 'component_35929';
export function Component35929({ value = 35929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35929, 'data-value': derived.doubled }, children);
}
export default Component35929;
