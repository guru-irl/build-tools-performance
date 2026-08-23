import React from 'react';
const LABEL_22741 = 'component_22741';
export function Component22741({ value = 22741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22741, 'data-value': derived.doubled }, children);
}
export default Component22741;
