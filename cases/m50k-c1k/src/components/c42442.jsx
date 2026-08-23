import React from 'react';
const LABEL_42442 = 'component_42442';
export function Component42442({ value = 42442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42442, 'data-value': derived.doubled }, children);
}
export default Component42442;
