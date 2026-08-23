import React from 'react';
const LABEL_37425 = 'component_37425';
export function Component37425({ value = 37425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37425, 'data-value': derived.doubled }, children);
}
export default Component37425;
