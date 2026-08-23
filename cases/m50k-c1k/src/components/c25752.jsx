import React from 'react';
const LABEL_25752 = 'component_25752';
export function Component25752({ value = 25752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25752, 'data-value': derived.doubled }, children);
}
export default Component25752;
