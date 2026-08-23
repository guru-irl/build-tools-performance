import React from 'react';
const LABEL_19929 = 'component_19929';
export function Component19929({ value = 19929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19929, 'data-value': derived.doubled }, children);
}
export default Component19929;
