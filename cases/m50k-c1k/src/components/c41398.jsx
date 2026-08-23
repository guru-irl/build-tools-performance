import React from 'react';
const LABEL_41398 = 'component_41398';
export function Component41398({ value = 41398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41398, 'data-value': derived.doubled }, children);
}
export default Component41398;
