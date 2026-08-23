import React from 'react';
const LABEL_31659 = 'component_31659';
export function Component31659({ value = 31659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31659, 'data-value': derived.doubled }, children);
}
export default Component31659;
