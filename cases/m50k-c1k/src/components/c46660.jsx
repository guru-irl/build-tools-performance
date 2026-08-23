import React from 'react';
const LABEL_46660 = 'component_46660';
export function Component46660({ value = 46660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46660, 'data-value': derived.doubled }, children);
}
export default Component46660;
