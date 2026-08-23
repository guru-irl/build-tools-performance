import React from 'react';
const LABEL_8431 = 'component_8431';
export function Component8431({ value = 8431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8431, 'data-value': derived.doubled }, children);
}
export default Component8431;
