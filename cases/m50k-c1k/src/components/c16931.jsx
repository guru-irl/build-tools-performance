import React from 'react';
const LABEL_16931 = 'component_16931';
export function Component16931({ value = 16931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16931, 'data-value': derived.doubled }, children);
}
export default Component16931;
