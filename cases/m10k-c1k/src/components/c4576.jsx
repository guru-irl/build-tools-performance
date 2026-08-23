import React from 'react';
const LABEL_4576 = 'component_4576';
export function Component4576({ value = 4576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4576, 'data-value': derived.doubled }, children);
}
export default Component4576;
