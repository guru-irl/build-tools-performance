import React from 'react';
const LABEL_14660 = 'component_14660';
export function Component14660({ value = 14660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14660, 'data-value': derived.doubled }, children);
}
export default Component14660;
