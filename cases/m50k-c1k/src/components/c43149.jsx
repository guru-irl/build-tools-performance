import React from 'react';
const LABEL_43149 = 'component_43149';
export function Component43149({ value = 43149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43149, 'data-value': derived.doubled }, children);
}
export default Component43149;
