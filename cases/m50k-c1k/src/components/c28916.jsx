import React from 'react';
const LABEL_28916 = 'component_28916';
export function Component28916({ value = 28916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28916, 'data-value': derived.doubled }, children);
}
export default Component28916;
