import React from 'react';
const LABEL_20099 = 'component_20099';
export function Component20099({ value = 20099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20099, 'data-value': derived.doubled }, children);
}
export default Component20099;
