import React from 'react';
const LABEL_8577 = 'component_8577';
export function Component8577({ value = 8577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8577, 'data-value': derived.doubled }, children);
}
export default Component8577;
