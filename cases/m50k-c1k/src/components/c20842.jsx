import React from 'react';
const LABEL_20842 = 'component_20842';
export function Component20842({ value = 20842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20842, 'data-value': derived.doubled }, children);
}
export default Component20842;
