import React from 'react';
const LABEL_8880 = 'component_8880';
export function Component8880({ value = 8880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8880, 'data-value': derived.doubled }, children);
}
export default Component8880;
