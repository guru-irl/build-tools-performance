import React from 'react';
const LABEL_43126 = 'component_43126';
export function Component43126({ value = 43126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43126, 'data-value': derived.doubled }, children);
}
export default Component43126;
