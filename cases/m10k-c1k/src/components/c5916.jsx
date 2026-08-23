import React from 'react';
const LABEL_5916 = 'component_5916';
export function Component5916({ value = 5916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5916, 'data-value': derived.doubled }, children);
}
export default Component5916;
