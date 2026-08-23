import React from 'react';
const LABEL_26615 = 'component_26615';
export function Component26615({ value = 26615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26615, 'data-value': derived.doubled }, children);
}
export default Component26615;
