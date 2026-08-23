import React from 'react';
const LABEL_35685 = 'component_35685';
export function Component35685({ value = 35685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35685, 'data-value': derived.doubled }, children);
}
export default Component35685;
