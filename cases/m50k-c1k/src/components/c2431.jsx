import React from 'react';
const LABEL_2431 = 'component_2431';
export function Component2431({ value = 2431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2431, 'data-value': derived.doubled }, children);
}
export default Component2431;
