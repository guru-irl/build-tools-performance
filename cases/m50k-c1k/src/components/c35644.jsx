import React from 'react';
const LABEL_35644 = 'component_35644';
export function Component35644({ value = 35644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35644, 'data-value': derived.doubled }, children);
}
export default Component35644;
