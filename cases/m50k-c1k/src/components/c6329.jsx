import React from 'react';
const LABEL_6329 = 'component_6329';
export function Component6329({ value = 6329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6329, 'data-value': derived.doubled }, children);
}
export default Component6329;
