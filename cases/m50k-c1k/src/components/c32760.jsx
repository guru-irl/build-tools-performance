import React from 'react';
const LABEL_32760 = 'component_32760';
export function Component32760({ value = 32760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32760, 'data-value': derived.doubled }, children);
}
export default Component32760;
