import React from 'react';
const LABEL_36329 = 'component_36329';
export function Component36329({ value = 36329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36329, 'data-value': derived.doubled }, children);
}
export default Component36329;
