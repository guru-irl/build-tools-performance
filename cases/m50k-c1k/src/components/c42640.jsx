import React from 'react';
const LABEL_42640 = 'component_42640';
export function Component42640({ value = 42640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42640, 'data-value': derived.doubled }, children);
}
export default Component42640;
