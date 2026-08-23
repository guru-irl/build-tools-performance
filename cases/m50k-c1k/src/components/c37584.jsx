import React from 'react';
const LABEL_37584 = 'component_37584';
export function Component37584({ value = 37584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37584, 'data-value': derived.doubled }, children);
}
export default Component37584;
