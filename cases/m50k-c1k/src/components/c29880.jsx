import React from 'react';
const LABEL_29880 = 'component_29880';
export function Component29880({ value = 29880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29880, 'data-value': derived.doubled }, children);
}
export default Component29880;
