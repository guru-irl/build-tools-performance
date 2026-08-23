import React from 'react';
const LABEL_34642 = 'component_34642';
export function Component34642({ value = 34642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34642, 'data-value': derived.doubled }, children);
}
export default Component34642;
