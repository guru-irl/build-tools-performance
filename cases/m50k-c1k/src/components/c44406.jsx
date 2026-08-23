import React from 'react';
const LABEL_44406 = 'component_44406';
export function Component44406({ value = 44406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44406, 'data-value': derived.doubled }, children);
}
export default Component44406;
