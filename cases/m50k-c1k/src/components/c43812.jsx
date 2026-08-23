import React from 'react';
const LABEL_43812 = 'component_43812';
export function Component43812({ value = 43812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43812, 'data-value': derived.doubled }, children);
}
export default Component43812;
