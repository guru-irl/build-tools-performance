import React from 'react';
const LABEL_5163 = 'component_5163';
export function Component5163({ value = 5163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5163, 'data-value': derived.doubled }, children);
}
export default Component5163;
