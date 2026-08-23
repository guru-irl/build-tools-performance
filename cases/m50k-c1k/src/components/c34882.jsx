import React from 'react';
const LABEL_34882 = 'component_34882';
export function Component34882({ value = 34882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34882, 'data-value': derived.doubled }, children);
}
export default Component34882;
