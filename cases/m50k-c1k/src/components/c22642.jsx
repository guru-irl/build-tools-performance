import React from 'react';
const LABEL_22642 = 'component_22642';
export function Component22642({ value = 22642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22642, 'data-value': derived.doubled }, children);
}
export default Component22642;
