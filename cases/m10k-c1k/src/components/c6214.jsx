import React from 'react';
const LABEL_6214 = 'component_6214';
export function Component6214({ value = 6214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6214, 'data-value': derived.doubled }, children);
}
export default Component6214;
