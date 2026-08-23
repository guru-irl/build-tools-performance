import React from 'react';
const LABEL_41966 = 'component_41966';
export function Component41966({ value = 41966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41966, 'data-value': derived.doubled }, children);
}
export default Component41966;
