import React from 'react';
const LABEL_26581 = 'component_26581';
export function Component26581({ value = 26581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26581, 'data-value': derived.doubled }, children);
}
export default Component26581;
