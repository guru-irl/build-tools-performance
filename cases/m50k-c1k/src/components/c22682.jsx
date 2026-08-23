import React from 'react';
const LABEL_22682 = 'component_22682';
export function Component22682({ value = 22682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22682, 'data-value': derived.doubled }, children);
}
export default Component22682;
