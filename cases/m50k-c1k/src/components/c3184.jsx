import React from 'react';
const LABEL_3184 = 'component_3184';
export function Component3184({ value = 3184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3184, 'data-value': derived.doubled }, children);
}
export default Component3184;
