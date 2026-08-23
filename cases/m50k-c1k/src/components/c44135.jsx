import React from 'react';
const LABEL_44135 = 'component_44135';
export function Component44135({ value = 44135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44135, 'data-value': derived.doubled }, children);
}
export default Component44135;
