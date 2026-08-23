import React from 'react';
const LABEL_14576 = 'component_14576';
export function Component14576({ value = 14576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14576, 'data-value': derived.doubled }, children);
}
export default Component14576;
