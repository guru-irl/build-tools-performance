import React from 'react';
const LABEL_44752 = 'component_44752';
export function Component44752({ value = 44752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44752, 'data-value': derived.doubled }, children);
}
export default Component44752;
