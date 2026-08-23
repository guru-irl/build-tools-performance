import React from 'react';
const LABEL_43520 = 'component_43520';
export function Component43520({ value = 43520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43520, 'data-value': derived.doubled }, children);
}
export default Component43520;
