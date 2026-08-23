import React from 'react';
const LABEL_18795 = 'component_18795';
export function Component18795({ value = 18795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18795, 'data-value': derived.doubled }, children);
}
export default Component18795;
