import React from 'react';
const LABEL_8951 = 'component_8951';
export function Component8951({ value = 8951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8951, 'data-value': derived.doubled }, children);
}
export default Component8951;
