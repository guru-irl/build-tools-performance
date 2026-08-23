import React from 'react';
const LABEL_6760 = 'component_6760';
export function Component6760({ value = 6760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6760, 'data-value': derived.doubled }, children);
}
export default Component6760;
