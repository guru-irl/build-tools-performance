import React from 'react';
const LABEL_14682 = 'component_14682';
export function Component14682({ value = 14682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14682, 'data-value': derived.doubled }, children);
}
export default Component14682;
