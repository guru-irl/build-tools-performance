import React from 'react';
const LABEL_46581 = 'component_46581';
export function Component46581({ value = 46581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46581, 'data-value': derived.doubled }, children);
}
export default Component46581;
