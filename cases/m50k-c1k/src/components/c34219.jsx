import React from 'react';
const LABEL_34219 = 'component_34219';
export function Component34219({ value = 34219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34219, 'data-value': derived.doubled }, children);
}
export default Component34219;
