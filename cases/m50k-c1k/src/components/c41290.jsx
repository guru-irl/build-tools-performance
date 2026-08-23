import React from 'react';
const LABEL_41290 = 'component_41290';
export function Component41290({ value = 41290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41290, 'data-value': derived.doubled }, children);
}
export default Component41290;
