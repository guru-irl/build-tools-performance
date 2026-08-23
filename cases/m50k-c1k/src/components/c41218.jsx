import React from 'react';
const LABEL_41218 = 'component_41218';
export function Component41218({ value = 41218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41218, 'data-value': derived.doubled }, children);
}
export default Component41218;
