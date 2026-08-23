import React from 'react';
const LABEL_34603 = 'component_34603';
export function Component34603({ value = 34603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34603, 'data-value': derived.doubled }, children);
}
export default Component34603;
