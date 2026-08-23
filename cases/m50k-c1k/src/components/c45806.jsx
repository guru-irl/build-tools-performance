import React from 'react';
const LABEL_45806 = 'component_45806';
export function Component45806({ value = 45806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45806, 'data-value': derived.doubled }, children);
}
export default Component45806;
