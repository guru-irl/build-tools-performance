import React from 'react';
const LABEL_37527 = 'component_37527';
export function Component37527({ value = 37527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37527, 'data-value': derived.doubled }, children);
}
export default Component37527;
