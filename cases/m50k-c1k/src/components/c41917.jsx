import React from 'react';
const LABEL_41917 = 'component_41917';
export function Component41917({ value = 41917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41917, 'data-value': derived.doubled }, children);
}
export default Component41917;
