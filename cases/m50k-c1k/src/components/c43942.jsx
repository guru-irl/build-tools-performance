import React from 'react';
const LABEL_43942 = 'component_43942';
export function Component43942({ value = 43942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43942, 'data-value': derived.doubled }, children);
}
export default Component43942;
