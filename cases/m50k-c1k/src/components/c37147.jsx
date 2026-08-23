import React from 'react';
const LABEL_37147 = 'component_37147';
export function Component37147({ value = 37147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37147, 'data-value': derived.doubled }, children);
}
export default Component37147;
