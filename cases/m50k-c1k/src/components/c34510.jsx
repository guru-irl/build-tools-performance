import React from 'react';
const LABEL_34510 = 'component_34510';
export function Component34510({ value = 34510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34510, 'data-value': derived.doubled }, children);
}
export default Component34510;
