import React from 'react';
const LABEL_41916 = 'component_41916';
export function Component41916({ value = 41916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41916, 'data-value': derived.doubled }, children);
}
export default Component41916;
