import React from 'react';
const LABEL_37080 = 'component_37080';
export function Component37080({ value = 37080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37080, 'data-value': derived.doubled }, children);
}
export default Component37080;
