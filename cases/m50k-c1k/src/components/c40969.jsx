import React from 'react';
const LABEL_40969 = 'component_40969';
export function Component40969({ value = 40969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40969, 'data-value': derived.doubled }, children);
}
export default Component40969;
