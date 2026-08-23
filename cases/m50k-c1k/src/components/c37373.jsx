import React from 'react';
const LABEL_37373 = 'component_37373';
export function Component37373({ value = 37373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37373, 'data-value': derived.doubled }, children);
}
export default Component37373;
