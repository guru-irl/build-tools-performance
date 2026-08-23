import React from 'react';
const LABEL_8115 = 'component_8115';
export function Component8115({ value = 8115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8115, 'data-value': derived.doubled }, children);
}
export default Component8115;
