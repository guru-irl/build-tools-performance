import React from 'react';
const LABEL_43401 = 'component_43401';
export function Component43401({ value = 43401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43401, 'data-value': derived.doubled }, children);
}
export default Component43401;
