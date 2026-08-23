import React from 'react';
const LABEL_46564 = 'component_46564';
export function Component46564({ value = 46564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46564, 'data-value': derived.doubled }, children);
}
export default Component46564;
