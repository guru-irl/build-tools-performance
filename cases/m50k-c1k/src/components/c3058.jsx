import React from 'react';
const LABEL_3058 = 'component_3058';
export function Component3058({ value = 3058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3058, 'data-value': derived.doubled }, children);
}
export default Component3058;
