import React from 'react';
const LABEL_35587 = 'component_35587';
export function Component35587({ value = 35587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35587, 'data-value': derived.doubled }, children);
}
export default Component35587;
