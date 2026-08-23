import React from 'react';
const LABEL_16795 = 'component_16795';
export function Component16795({ value = 16795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16795, 'data-value': derived.doubled }, children);
}
export default Component16795;
