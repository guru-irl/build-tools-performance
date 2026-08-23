import React from 'react';
const LABEL_43533 = 'component_43533';
export function Component43533({ value = 43533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43533, 'data-value': derived.doubled }, children);
}
export default Component43533;
