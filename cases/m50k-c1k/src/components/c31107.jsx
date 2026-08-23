import React from 'react';
const LABEL_31107 = 'component_31107';
export function Component31107({ value = 31107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31107, 'data-value': derived.doubled }, children);
}
export default Component31107;
