import React from 'react';
const LABEL_20954 = 'component_20954';
export function Component20954({ value = 20954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20954, 'data-value': derived.doubled }, children);
}
export default Component20954;
