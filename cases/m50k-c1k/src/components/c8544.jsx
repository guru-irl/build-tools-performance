import React from 'react';
const LABEL_8544 = 'component_8544';
export function Component8544({ value = 8544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8544, 'data-value': derived.doubled }, children);
}
export default Component8544;
