import React from 'react';
const LABEL_41922 = 'component_41922';
export function Component41922({ value = 41922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41922, 'data-value': derived.doubled }, children);
}
export default Component41922;
