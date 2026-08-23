import React from 'react';
const LABEL_45037 = 'component_45037';
export function Component45037({ value = 45037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45037, 'data-value': derived.doubled }, children);
}
export default Component45037;
