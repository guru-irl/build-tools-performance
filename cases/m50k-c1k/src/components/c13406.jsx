import React from 'react';
const LABEL_13406 = 'component_13406';
export function Component13406({ value = 13406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13406, 'data-value': derived.doubled }, children);
}
export default Component13406;
