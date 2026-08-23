import React from 'react';
const LABEL_45481 = 'component_45481';
export function Component45481({ value = 45481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45481, 'data-value': derived.doubled }, children);
}
export default Component45481;
