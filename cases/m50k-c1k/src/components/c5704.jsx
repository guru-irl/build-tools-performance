import React from 'react';
const LABEL_5704 = 'component_5704';
export function Component5704({ value = 5704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5704, 'data-value': derived.doubled }, children);
}
export default Component5704;
