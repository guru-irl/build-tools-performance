import React from 'react';
const LABEL_28576 = 'component_28576';
export function Component28576({ value = 28576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28576, 'data-value': derived.doubled }, children);
}
export default Component28576;
