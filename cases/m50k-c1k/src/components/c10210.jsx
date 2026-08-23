import React from 'react';
const LABEL_10210 = 'component_10210';
export function Component10210({ value = 10210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10210, 'data-value': derived.doubled }, children);
}
export default Component10210;
