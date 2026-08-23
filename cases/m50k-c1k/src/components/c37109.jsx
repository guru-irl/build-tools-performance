import React from 'react';
const LABEL_37109 = 'component_37109';
export function Component37109({ value = 37109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37109, 'data-value': derived.doubled }, children);
}
export default Component37109;
