import React from 'react';
const LABEL_46407 = 'component_46407';
export function Component46407({ value = 46407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46407, 'data-value': derived.doubled }, children);
}
export default Component46407;
