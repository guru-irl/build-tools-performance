import React from 'react';
const LABEL_19332 = 'component_19332';
export function Component19332({ value = 19332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19332, 'data-value': derived.doubled }, children);
}
export default Component19332;
