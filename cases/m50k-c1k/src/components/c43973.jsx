import React from 'react';
const LABEL_43973 = 'component_43973';
export function Component43973({ value = 43973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43973, 'data-value': derived.doubled }, children);
}
export default Component43973;
