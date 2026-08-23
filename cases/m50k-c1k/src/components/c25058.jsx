import React from 'react';
const LABEL_25058 = 'component_25058';
export function Component25058({ value = 25058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25058, 'data-value': derived.doubled }, children);
}
export default Component25058;
