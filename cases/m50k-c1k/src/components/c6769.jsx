import React from 'react';
const LABEL_6769 = 'component_6769';
export function Component6769({ value = 6769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6769, 'data-value': derived.doubled }, children);
}
export default Component6769;
