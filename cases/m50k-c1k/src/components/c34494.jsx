import React from 'react';
const LABEL_34494 = 'component_34494';
export function Component34494({ value = 34494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34494, 'data-value': derived.doubled }, children);
}
export default Component34494;
