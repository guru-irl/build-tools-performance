import React from 'react';
const LABEL_37076 = 'component_37076';
export function Component37076({ value = 37076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37076, 'data-value': derived.doubled }, children);
}
export default Component37076;
