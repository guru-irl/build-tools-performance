import React from 'react';
const LABEL_37238 = 'component_37238';
export function Component37238({ value = 37238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37238, 'data-value': derived.doubled }, children);
}
export default Component37238;
