import React from 'react';
const LABEL_43413 = 'component_43413';
export function Component43413({ value = 43413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43413, 'data-value': derived.doubled }, children);
}
export default Component43413;
