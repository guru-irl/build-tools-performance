import React from 'react';
const LABEL_37522 = 'component_37522';
export function Component37522({ value = 37522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37522, 'data-value': derived.doubled }, children);
}
export default Component37522;
