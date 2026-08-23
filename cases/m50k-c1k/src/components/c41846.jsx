import React from 'react';
const LABEL_41846 = 'component_41846';
export function Component41846({ value = 41846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41846, 'data-value': derived.doubled }, children);
}
export default Component41846;
