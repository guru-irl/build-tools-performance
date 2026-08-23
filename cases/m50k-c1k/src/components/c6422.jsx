import React from 'react';
const LABEL_6422 = 'component_6422';
export function Component6422({ value = 6422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6422, 'data-value': derived.doubled }, children);
}
export default Component6422;
