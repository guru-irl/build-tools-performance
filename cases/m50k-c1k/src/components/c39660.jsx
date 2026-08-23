import React from 'react';
const LABEL_39660 = 'component_39660';
export function Component39660({ value = 39660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39660, 'data-value': derived.doubled }, children);
}
export default Component39660;
