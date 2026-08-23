import React from 'react';
const LABEL_35453 = 'component_35453';
export function Component35453({ value = 35453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35453, 'data-value': derived.doubled }, children);
}
export default Component35453;
