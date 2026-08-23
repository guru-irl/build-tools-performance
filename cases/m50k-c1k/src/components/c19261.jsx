import React from 'react';
const LABEL_19261 = 'component_19261';
export function Component19261({ value = 19261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19261, 'data-value': derived.doubled }, children);
}
export default Component19261;
