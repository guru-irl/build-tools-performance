import React from 'react';
const LABEL_41219 = 'component_41219';
export function Component41219({ value = 41219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41219, 'data-value': derived.doubled }, children);
}
export default Component41219;
