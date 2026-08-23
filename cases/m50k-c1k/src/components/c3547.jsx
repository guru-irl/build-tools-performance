import React from 'react';
const LABEL_3547 = 'component_3547';
export function Component3547({ value = 3547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3547, 'data-value': derived.doubled }, children);
}
export default Component3547;
