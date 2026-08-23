import React from 'react';
const LABEL_11076 = 'component_11076';
export function Component11076({ value = 11076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11076, 'data-value': derived.doubled }, children);
}
export default Component11076;
