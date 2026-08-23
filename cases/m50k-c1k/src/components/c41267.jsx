import React from 'react';
const LABEL_41267 = 'component_41267';
export function Component41267({ value = 41267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41267, 'data-value': derived.doubled }, children);
}
export default Component41267;
