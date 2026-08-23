import React from 'react';
const LABEL_11256 = 'component_11256';
export function Component11256({ value = 11256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11256, 'data-value': derived.doubled }, children);
}
export default Component11256;
