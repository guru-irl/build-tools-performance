import React from 'react';
const LABEL_22373 = 'component_22373';
export function Component22373({ value = 22373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22373, 'data-value': derived.doubled }, children);
}
export default Component22373;
