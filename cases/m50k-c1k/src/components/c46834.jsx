import React from 'react';
const LABEL_46834 = 'component_46834';
export function Component46834({ value = 46834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46834, 'data-value': derived.doubled }, children);
}
export default Component46834;
