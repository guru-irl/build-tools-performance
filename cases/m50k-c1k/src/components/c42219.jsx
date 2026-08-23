import React from 'react';
const LABEL_42219 = 'component_42219';
export function Component42219({ value = 42219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42219, 'data-value': derived.doubled }, children);
}
export default Component42219;
