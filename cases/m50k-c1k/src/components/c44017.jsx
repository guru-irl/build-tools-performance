import React from 'react';
const LABEL_44017 = 'component_44017';
export function Component44017({ value = 44017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44017, 'data-value': derived.doubled }, children);
}
export default Component44017;
