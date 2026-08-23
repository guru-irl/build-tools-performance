import React from 'react';
const LABEL_43882 = 'component_43882';
export function Component43882({ value = 43882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43882, 'data-value': derived.doubled }, children);
}
export default Component43882;
