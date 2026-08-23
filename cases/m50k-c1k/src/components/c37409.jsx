import React from 'react';
const LABEL_37409 = 'component_37409';
export function Component37409({ value = 37409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37409, 'data-value': derived.doubled }, children);
}
export default Component37409;
