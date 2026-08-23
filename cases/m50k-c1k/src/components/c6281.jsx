import React from 'react';
const LABEL_6281 = 'component_6281';
export function Component6281({ value = 6281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6281, 'data-value': derived.doubled }, children);
}
export default Component6281;
