import React from 'react';
const LABEL_11660 = 'component_11660';
export function Component11660({ value = 11660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11660, 'data-value': derived.doubled }, children);
}
export default Component11660;
