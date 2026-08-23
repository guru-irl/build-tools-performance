import React from 'react';
const LABEL_46576 = 'component_46576';
export function Component46576({ value = 46576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46576, 'data-value': derived.doubled }, children);
}
export default Component46576;
