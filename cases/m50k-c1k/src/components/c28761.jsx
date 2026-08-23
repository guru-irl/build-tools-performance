import React from 'react';
const LABEL_28761 = 'component_28761';
export function Component28761({ value = 28761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28761, 'data-value': derived.doubled }, children);
}
export default Component28761;
