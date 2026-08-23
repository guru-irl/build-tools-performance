import React from 'react';
const LABEL_5891 = 'component_5891';
export function Component5891({ value = 5891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5891, 'data-value': derived.doubled }, children);
}
export default Component5891;
