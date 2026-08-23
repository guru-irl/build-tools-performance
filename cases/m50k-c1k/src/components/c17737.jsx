import React from 'react';
const LABEL_17737 = 'component_17737';
export function Component17737({ value = 17737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17737, 'data-value': derived.doubled }, children);
}
export default Component17737;
