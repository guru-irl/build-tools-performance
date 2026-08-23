import React from 'react';
const LABEL_43985 = 'component_43985';
export function Component43985({ value = 43985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43985, 'data-value': derived.doubled }, children);
}
export default Component43985;
