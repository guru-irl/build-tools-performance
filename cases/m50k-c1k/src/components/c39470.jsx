import React from 'react';
const LABEL_39470 = 'component_39470';
export function Component39470({ value = 39470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39470, 'data-value': derived.doubled }, children);
}
export default Component39470;
