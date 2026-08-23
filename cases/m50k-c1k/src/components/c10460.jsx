import React from 'react';
const LABEL_10460 = 'component_10460';
export function Component10460({ value = 10460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10460, 'data-value': derived.doubled }, children);
}
export default Component10460;
