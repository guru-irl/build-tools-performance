import React from 'react';
const LABEL_41345 = 'component_41345';
export function Component41345({ value = 41345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41345, 'data-value': derived.doubled }, children);
}
export default Component41345;
