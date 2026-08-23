import React from 'react';
const LABEL_45916 = 'component_45916';
export function Component45916({ value = 45916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45916, 'data-value': derived.doubled }, children);
}
export default Component45916;
