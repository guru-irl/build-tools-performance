import React from 'react';
const LABEL_43628 = 'component_43628';
export function Component43628({ value = 43628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43628, 'data-value': derived.doubled }, children);
}
export default Component43628;
