import React from 'react';
const LABEL_3752 = 'component_3752';
export function Component3752({ value = 3752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3752, 'data-value': derived.doubled }, children);
}
export default Component3752;
