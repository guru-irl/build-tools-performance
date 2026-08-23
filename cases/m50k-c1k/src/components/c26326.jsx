import React from 'react';
const LABEL_26326 = 'component_26326';
export function Component26326({ value = 26326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26326, 'data-value': derived.doubled }, children);
}
export default Component26326;
