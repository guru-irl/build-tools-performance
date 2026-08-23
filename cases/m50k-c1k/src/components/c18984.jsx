import React from 'react';
const LABEL_18984 = 'component_18984';
export function Component18984({ value = 18984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18984, 'data-value': derived.doubled }, children);
}
export default Component18984;
