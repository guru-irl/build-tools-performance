import React from 'react';
const LABEL_37102 = 'component_37102';
export function Component37102({ value = 37102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37102, 'data-value': derived.doubled }, children);
}
export default Component37102;
