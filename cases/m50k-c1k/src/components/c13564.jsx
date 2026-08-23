import React from 'react';
const LABEL_13564 = 'component_13564';
export function Component13564({ value = 13564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13564, 'data-value': derived.doubled }, children);
}
export default Component13564;
