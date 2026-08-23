import React from 'react';
const LABEL_19622 = 'component_19622';
export function Component19622({ value = 19622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19622, 'data-value': derived.doubled }, children);
}
export default Component19622;
