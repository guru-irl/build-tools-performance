import React from 'react';
const LABEL_29842 = 'component_29842';
export function Component29842({ value = 29842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29842, 'data-value': derived.doubled }, children);
}
export default Component29842;
