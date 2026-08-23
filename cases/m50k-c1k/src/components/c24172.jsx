import React from 'react';
const LABEL_24172 = 'component_24172';
export function Component24172({ value = 24172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24172, 'data-value': derived.doubled }, children);
}
export default Component24172;
