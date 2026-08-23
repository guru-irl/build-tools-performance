import React from 'react';
const LABEL_43830 = 'component_43830';
export function Component43830({ value = 43830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43830, 'data-value': derived.doubled }, children);
}
export default Component43830;
