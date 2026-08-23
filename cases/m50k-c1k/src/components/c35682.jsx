import React from 'react';
const LABEL_35682 = 'component_35682';
export function Component35682({ value = 35682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35682, 'data-value': derived.doubled }, children);
}
export default Component35682;
