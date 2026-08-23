import React from 'react';
const LABEL_17492 = 'component_17492';
export function Component17492({ value = 17492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17492, 'data-value': derived.doubled }, children);
}
export default Component17492;
