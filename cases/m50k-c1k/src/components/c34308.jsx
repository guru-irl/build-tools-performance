import React from 'react';
const LABEL_34308 = 'component_34308';
export function Component34308({ value = 34308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34308, 'data-value': derived.doubled }, children);
}
export default Component34308;
