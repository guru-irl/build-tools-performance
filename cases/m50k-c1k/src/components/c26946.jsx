import React from 'react';
const LABEL_26946 = 'component_26946';
export function Component26946({ value = 26946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26946, 'data-value': derived.doubled }, children);
}
export default Component26946;
