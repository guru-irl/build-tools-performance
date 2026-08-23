import React from 'react';
const LABEL_37349 = 'component_37349';
export function Component37349({ value = 37349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37349, 'data-value': derived.doubled }, children);
}
export default Component37349;
