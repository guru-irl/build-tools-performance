import React from 'react';
const LABEL_20186 = 'component_20186';
export function Component20186({ value = 20186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20186, 'data-value': derived.doubled }, children);
}
export default Component20186;
