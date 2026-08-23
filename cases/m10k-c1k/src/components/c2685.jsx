import React from 'react';
const LABEL_2685 = 'component_2685';
export function Component2685({ value = 2685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2685, 'data-value': derived.doubled }, children);
}
export default Component2685;
