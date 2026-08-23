import React from 'react';
const LABEL_45 = 'component_45';
export function Component45({ value = 45, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45, 'data-value': derived.doubled }, children);
}
export default Component45;
