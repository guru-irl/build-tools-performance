import React from 'react';
const LABEL_43508 = 'component_43508';
export function Component43508({ value = 43508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43508, 'data-value': derived.doubled }, children);
}
export default Component43508;
