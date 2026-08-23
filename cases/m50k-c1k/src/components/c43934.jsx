import React from 'react';
const LABEL_43934 = 'component_43934';
export function Component43934({ value = 43934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43934, 'data-value': derived.doubled }, children);
}
export default Component43934;
