import React from 'react';
const LABEL_31656 = 'component_31656';
export function Component31656({ value = 31656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31656, 'data-value': derived.doubled }, children);
}
export default Component31656;
