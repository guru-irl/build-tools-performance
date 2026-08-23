import React from 'react';
const LABEL_37179 = 'component_37179';
export function Component37179({ value = 37179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37179, 'data-value': derived.doubled }, children);
}
export default Component37179;
