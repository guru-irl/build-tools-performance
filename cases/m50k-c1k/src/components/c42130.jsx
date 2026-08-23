import React from 'react';
const LABEL_42130 = 'component_42130';
export function Component42130({ value = 42130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42130, 'data-value': derived.doubled }, children);
}
export default Component42130;
