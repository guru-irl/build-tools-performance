import React from 'react';
const LABEL_8694 = 'component_8694';
export function Component8694({ value = 8694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8694, 'data-value': derived.doubled }, children);
}
export default Component8694;
