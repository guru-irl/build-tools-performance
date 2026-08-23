import React from 'react';
const LABEL_2954 = 'component_2954';
export function Component2954({ value = 2954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2954, 'data-value': derived.doubled }, children);
}
export default Component2954;
