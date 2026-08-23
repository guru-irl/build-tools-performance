import React from 'react';
const LABEL_24048 = 'component_24048';
export function Component24048({ value = 24048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24048, 'data-value': derived.doubled }, children);
}
export default Component24048;
