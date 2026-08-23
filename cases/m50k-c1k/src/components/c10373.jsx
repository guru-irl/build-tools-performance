import React from 'react';
const LABEL_10373 = 'component_10373';
export function Component10373({ value = 10373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10373, 'data-value': derived.doubled }, children);
}
export default Component10373;
