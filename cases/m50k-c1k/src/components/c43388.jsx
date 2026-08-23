import React from 'react';
const LABEL_43388 = 'component_43388';
export function Component43388({ value = 43388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43388, 'data-value': derived.doubled }, children);
}
export default Component43388;
