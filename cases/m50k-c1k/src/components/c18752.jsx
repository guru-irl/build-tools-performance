import React from 'react';
const LABEL_18752 = 'component_18752';
export function Component18752({ value = 18752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18752, 'data-value': derived.doubled }, children);
}
export default Component18752;
