import React from 'react';
const LABEL_15048 = 'component_15048';
export function Component15048({ value = 15048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15048, 'data-value': derived.doubled }, children);
}
export default Component15048;
