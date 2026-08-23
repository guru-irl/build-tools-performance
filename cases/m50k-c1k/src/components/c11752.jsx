import React from 'react';
const LABEL_11752 = 'component_11752';
export function Component11752({ value = 11752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11752, 'data-value': derived.doubled }, children);
}
export default Component11752;
