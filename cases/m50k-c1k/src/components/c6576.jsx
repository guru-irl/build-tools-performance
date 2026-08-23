import React from 'react';
const LABEL_6576 = 'component_6576';
export function Component6576({ value = 6576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6576, 'data-value': derived.doubled }, children);
}
export default Component6576;
