import React from 'react';
const LABEL_34752 = 'component_34752';
export function Component34752({ value = 34752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34752, 'data-value': derived.doubled }, children);
}
export default Component34752;
