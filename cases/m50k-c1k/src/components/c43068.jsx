import React from 'react';
const LABEL_43068 = 'component_43068';
export function Component43068({ value = 43068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43068, 'data-value': derived.doubled }, children);
}
export default Component43068;
