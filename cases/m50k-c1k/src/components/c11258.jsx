import React from 'react';
const LABEL_11258 = 'component_11258';
export function Component11258({ value = 11258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11258, 'data-value': derived.doubled }, children);
}
export default Component11258;
