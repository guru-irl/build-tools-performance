import React from 'react';
const LABEL_45057 = 'component_45057';
export function Component45057({ value = 45057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45057, 'data-value': derived.doubled }, children);
}
export default Component45057;
