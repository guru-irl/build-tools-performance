import React from 'react';
const LABEL_14628 = 'component_14628';
export function Component14628({ value = 14628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14628, 'data-value': derived.doubled }, children);
}
export default Component14628;
