import React from 'react';
const LABEL_31278 = 'component_31278';
export function Component31278({ value = 31278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31278, 'data-value': derived.doubled }, children);
}
export default Component31278;
