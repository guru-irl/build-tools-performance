import React from 'react';
const LABEL_43380 = 'component_43380';
export function Component43380({ value = 43380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43380, 'data-value': derived.doubled }, children);
}
export default Component43380;
