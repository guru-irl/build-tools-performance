import React from 'react';
const LABEL_37608 = 'component_37608';
export function Component37608({ value = 37608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37608, 'data-value': derived.doubled }, children);
}
export default Component37608;
