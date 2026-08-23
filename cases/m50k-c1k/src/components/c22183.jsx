import React from 'react';
const LABEL_22183 = 'component_22183';
export function Component22183({ value = 22183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22183, 'data-value': derived.doubled }, children);
}
export default Component22183;
