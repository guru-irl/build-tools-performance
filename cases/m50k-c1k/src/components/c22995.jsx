import React from 'react';
const LABEL_22995 = 'component_22995';
export function Component22995({ value = 22995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22995, 'data-value': derived.doubled }, children);
}
export default Component22995;
