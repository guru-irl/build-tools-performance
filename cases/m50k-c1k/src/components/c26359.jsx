import React from 'react';
const LABEL_26359 = 'component_26359';
export function Component26359({ value = 26359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26359, 'data-value': derived.doubled }, children);
}
export default Component26359;
