import React from 'react';
const LABEL_19576 = 'component_19576';
export function Component19576({ value = 19576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19576, 'data-value': derived.doubled }, children);
}
export default Component19576;
