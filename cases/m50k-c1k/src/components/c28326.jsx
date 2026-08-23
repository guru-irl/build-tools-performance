import React from 'react';
const LABEL_28326 = 'component_28326';
export function Component28326({ value = 28326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28326, 'data-value': derived.doubled }, children);
}
export default Component28326;
