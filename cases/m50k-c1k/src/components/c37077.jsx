import React from 'react';
const LABEL_37077 = 'component_37077';
export function Component37077({ value = 37077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37077, 'data-value': derived.doubled }, children);
}
export default Component37077;
