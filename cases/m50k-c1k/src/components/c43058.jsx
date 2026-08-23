import React from 'react';
const LABEL_43058 = 'component_43058';
export function Component43058({ value = 43058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43058, 'data-value': derived.doubled }, children);
}
export default Component43058;
