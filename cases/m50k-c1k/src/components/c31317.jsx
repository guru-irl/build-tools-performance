import React from 'react';
const LABEL_31317 = 'component_31317';
export function Component31317({ value = 31317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31317, 'data-value': derived.doubled }, children);
}
export default Component31317;
