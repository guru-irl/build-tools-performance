import React from 'react';
const LABEL_45911 = 'component_45911';
export function Component45911({ value = 45911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45911, 'data-value': derived.doubled }, children);
}
export default Component45911;
