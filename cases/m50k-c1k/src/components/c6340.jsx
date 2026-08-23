import React from 'react';
const LABEL_6340 = 'component_6340';
export function Component6340({ value = 6340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6340, 'data-value': derived.doubled }, children);
}
export default Component6340;
