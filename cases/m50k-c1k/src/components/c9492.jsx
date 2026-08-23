import React from 'react';
const LABEL_9492 = 'component_9492';
export function Component9492({ value = 9492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9492, 'data-value': derived.doubled }, children);
}
export default Component9492;
