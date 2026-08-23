import React from 'react';
const LABEL_45165 = 'component_45165';
export function Component45165({ value = 45165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45165, 'data-value': derived.doubled }, children);
}
export default Component45165;
