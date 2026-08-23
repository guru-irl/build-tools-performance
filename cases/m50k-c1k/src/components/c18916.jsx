import React from 'react';
const LABEL_18916 = 'component_18916';
export function Component18916({ value = 18916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18916, 'data-value': derived.doubled }, children);
}
export default Component18916;
