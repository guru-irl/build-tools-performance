import React from 'react';
const LABEL_78 = 'component_78';
export function Component78({ value = 78, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_78, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_78, 'data-value': derived.doubled }, children);
}
export default Component78;
