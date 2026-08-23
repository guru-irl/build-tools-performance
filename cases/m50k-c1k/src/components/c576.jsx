import React from 'react';
const LABEL_576 = 'component_576';
export function Component576({ value = 576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_576, 'data-value': derived.doubled }, children);
}
export default Component576;
