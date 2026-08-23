import React from 'react';
const LABEL_22102 = 'component_22102';
export function Component22102({ value = 22102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22102, 'data-value': derived.doubled }, children);
}
export default Component22102;
