import React from 'react';
const LABEL_38764 = 'component_38764';
export function Component38764({ value = 38764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38764, 'data-value': derived.doubled }, children);
}
export default Component38764;
