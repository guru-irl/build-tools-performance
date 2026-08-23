import React from 'react';
const LABEL_46281 = 'component_46281';
export function Component46281({ value = 46281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46281, 'data-value': derived.doubled }, children);
}
export default Component46281;
