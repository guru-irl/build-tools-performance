import React from 'react';
const LABEL_4685 = 'component_4685';
export function Component4685({ value = 4685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4685, 'data-value': derived.doubled }, children);
}
export default Component4685;
