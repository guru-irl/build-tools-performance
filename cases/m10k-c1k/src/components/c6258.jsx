import React from 'react';
const LABEL_6258 = 'component_6258';
export function Component6258({ value = 6258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6258, 'data-value': derived.doubled }, children);
}
export default Component6258;
