import React from 'react';
const LABEL_32480 = 'component_32480';
export function Component32480({ value = 32480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32480, 'data-value': derived.doubled }, children);
}
export default Component32480;
