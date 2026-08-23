import React from 'react';
const LABEL_13979 = 'component_13979';
export function Component13979({ value = 13979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13979, 'data-value': derived.doubled }, children);
}
export default Component13979;
