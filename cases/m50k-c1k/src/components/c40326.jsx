import React from 'react';
const LABEL_40326 = 'component_40326';
export function Component40326({ value = 40326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40326, 'data-value': derived.doubled }, children);
}
export default Component40326;
