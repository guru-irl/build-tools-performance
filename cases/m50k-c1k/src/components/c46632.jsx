import React from 'react';
const LABEL_46632 = 'component_46632';
export function Component46632({ value = 46632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46632, 'data-value': derived.doubled }, children);
}
export default Component46632;
