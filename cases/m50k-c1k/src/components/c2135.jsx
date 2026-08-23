import React from 'react';
const LABEL_2135 = 'component_2135';
export function Component2135({ value = 2135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2135, 'data-value': derived.doubled }, children);
}
export default Component2135;
