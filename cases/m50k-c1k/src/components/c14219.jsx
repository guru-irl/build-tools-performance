import React from 'react';
const LABEL_14219 = 'component_14219';
export function Component14219({ value = 14219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14219, 'data-value': derived.doubled }, children);
}
export default Component14219;
