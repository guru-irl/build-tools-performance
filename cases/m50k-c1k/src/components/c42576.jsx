import React from 'react';
const LABEL_42576 = 'component_42576';
export function Component42576({ value = 42576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42576, 'data-value': derived.doubled }, children);
}
export default Component42576;
