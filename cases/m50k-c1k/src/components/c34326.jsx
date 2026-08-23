import React from 'react';
const LABEL_34326 = 'component_34326';
export function Component34326({ value = 34326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34326, 'data-value': derived.doubled }, children);
}
export default Component34326;
