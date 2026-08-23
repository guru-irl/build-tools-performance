import React from 'react';
const LABEL_43919 = 'component_43919';
export function Component43919({ value = 43919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43919, 'data-value': derived.doubled }, children);
}
export default Component43919;
