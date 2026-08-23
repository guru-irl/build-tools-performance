import React from 'react';
const LABEL_28406 = 'component_28406';
export function Component28406({ value = 28406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28406, 'data-value': derived.doubled }, children);
}
export default Component28406;
