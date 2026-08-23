import React from 'react';
const LABEL_37107 = 'component_37107';
export function Component37107({ value = 37107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37107, 'data-value': derived.doubled }, children);
}
export default Component37107;
