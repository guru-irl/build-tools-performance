import React from 'react';
const LABEL_32567 = 'component_32567';
export function Component32567({ value = 32567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32567, 'data-value': derived.doubled }, children);
}
export default Component32567;
