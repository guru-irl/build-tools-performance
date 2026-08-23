import React from 'react';
const LABEL_31898 = 'component_31898';
export function Component31898({ value = 31898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31898, 'data-value': derived.doubled }, children);
}
export default Component31898;
