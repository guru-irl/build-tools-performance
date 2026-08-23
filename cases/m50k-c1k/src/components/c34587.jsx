import React from 'react';
const LABEL_34587 = 'component_34587';
export function Component34587({ value = 34587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34587, 'data-value': derived.doubled }, children);
}
export default Component34587;
