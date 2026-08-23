import React from 'react';
const LABEL_8102 = 'component_8102';
export function Component8102({ value = 8102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8102, 'data-value': derived.doubled }, children);
}
export default Component8102;
