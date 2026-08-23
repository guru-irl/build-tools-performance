import React from 'react';
const LABEL_3760 = 'component_3760';
export function Component3760({ value = 3760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3760, 'data-value': derived.doubled }, children);
}
export default Component3760;
