import React from 'react';
const LABEL_46219 = 'component_46219';
export function Component46219({ value = 46219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46219, 'data-value': derived.doubled }, children);
}
export default Component46219;
