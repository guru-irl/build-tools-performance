import React from 'react';
const LABEL_42660 = 'component_42660';
export function Component42660({ value = 42660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42660, 'data-value': derived.doubled }, children);
}
export default Component42660;
