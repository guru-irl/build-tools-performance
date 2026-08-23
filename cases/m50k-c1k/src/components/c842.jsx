import React from 'react';
const LABEL_842 = 'component_842';
export function Component842({ value = 842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_842, 'data-value': derived.doubled }, children);
}
export default Component842;
