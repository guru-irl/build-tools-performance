import React from 'react';
const LABEL_38835 = 'component_38835';
export function Component38835({ value = 38835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38835, 'data-value': derived.doubled }, children);
}
export default Component38835;
