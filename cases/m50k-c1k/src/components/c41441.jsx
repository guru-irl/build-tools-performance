import React from 'react';
const LABEL_41441 = 'component_41441';
export function Component41441({ value = 41441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41441, 'data-value': derived.doubled }, children);
}
export default Component41441;
