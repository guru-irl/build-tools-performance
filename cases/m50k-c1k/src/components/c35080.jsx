import React from 'react';
const LABEL_35080 = 'component_35080';
export function Component35080({ value = 35080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35080, 'data-value': derived.doubled }, children);
}
export default Component35080;
