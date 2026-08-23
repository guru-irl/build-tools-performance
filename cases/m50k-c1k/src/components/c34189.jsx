import React from 'react';
const LABEL_34189 = 'component_34189';
export function Component34189({ value = 34189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34189, 'data-value': derived.doubled }, children);
}
export default Component34189;
