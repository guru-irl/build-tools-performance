import React from 'react';
const LABEL_37916 = 'component_37916';
export function Component37916({ value = 37916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37916, 'data-value': derived.doubled }, children);
}
export default Component37916;
