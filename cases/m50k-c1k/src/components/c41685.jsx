import React from 'react';
const LABEL_41685 = 'component_41685';
export function Component41685({ value = 41685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41685, 'data-value': derived.doubled }, children);
}
export default Component41685;
