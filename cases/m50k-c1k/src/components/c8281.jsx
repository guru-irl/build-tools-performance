import React from 'react';
const LABEL_8281 = 'component_8281';
export function Component8281({ value = 8281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8281, 'data-value': derived.doubled }, children);
}
export default Component8281;
