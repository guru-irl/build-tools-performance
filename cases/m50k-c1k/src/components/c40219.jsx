import React from 'react';
const LABEL_40219 = 'component_40219';
export function Component40219({ value = 40219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40219, 'data-value': derived.doubled }, children);
}
export default Component40219;
