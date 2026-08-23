import React from 'react';
const LABEL_19911 = 'component_19911';
export function Component19911({ value = 19911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19911, 'data-value': derived.doubled }, children);
}
export default Component19911;
