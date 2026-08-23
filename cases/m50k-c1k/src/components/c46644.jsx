import React from 'react';
const LABEL_46644 = 'component_46644';
export function Component46644({ value = 46644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46644, 'data-value': derived.doubled }, children);
}
export default Component46644;
