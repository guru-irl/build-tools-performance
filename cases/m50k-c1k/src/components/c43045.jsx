import React from 'react';
const LABEL_43045 = 'component_43045';
export function Component43045({ value = 43045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43045, 'data-value': derived.doubled }, children);
}
export default Component43045;
