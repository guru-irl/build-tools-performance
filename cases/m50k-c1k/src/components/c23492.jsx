import React from 'react';
const LABEL_23492 = 'component_23492';
export function Component23492({ value = 23492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23492, 'data-value': derived.doubled }, children);
}
export default Component23492;
