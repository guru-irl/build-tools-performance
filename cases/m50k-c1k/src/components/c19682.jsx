import React from 'react';
const LABEL_19682 = 'component_19682';
export function Component19682({ value = 19682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19682, 'data-value': derived.doubled }, children);
}
export default Component19682;
