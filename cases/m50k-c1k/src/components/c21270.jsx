import React from 'react';
const LABEL_21270 = 'component_21270';
export function Component21270({ value = 21270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21270, 'data-value': derived.doubled }, children);
}
export default Component21270;
