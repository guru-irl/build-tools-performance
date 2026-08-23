import React from 'react';
const LABEL_34730 = 'component_34730';
export function Component34730({ value = 34730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34730, 'data-value': derived.doubled }, children);
}
export default Component34730;
