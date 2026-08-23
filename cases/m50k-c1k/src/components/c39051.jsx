import React from 'react';
const LABEL_39051 = 'component_39051';
export function Component39051({ value = 39051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39051, 'data-value': derived.doubled }, children);
}
export default Component39051;
