import React from 'react';
const LABEL_46508 = 'component_46508';
export function Component46508({ value = 46508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46508, 'data-value': derived.doubled }, children);
}
export default Component46508;
