import React from 'react';
const LABEL_18685 = 'component_18685';
export function Component18685({ value = 18685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18685, 'data-value': derived.doubled }, children);
}
export default Component18685;
