import React from 'react';
const LABEL_14954 = 'component_14954';
export function Component14954({ value = 14954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14954, 'data-value': derived.doubled }, children);
}
export default Component14954;
