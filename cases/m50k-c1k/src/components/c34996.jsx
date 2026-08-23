import React from 'react';
const LABEL_34996 = 'component_34996';
export function Component34996({ value = 34996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34996, 'data-value': derived.doubled }, children);
}
export default Component34996;
