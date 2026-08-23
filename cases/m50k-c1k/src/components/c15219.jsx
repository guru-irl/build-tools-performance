import React from 'react';
const LABEL_15219 = 'component_15219';
export function Component15219({ value = 15219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15219, 'data-value': derived.doubled }, children);
}
export default Component15219;
