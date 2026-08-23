import React from 'react';
const LABEL_46663 = 'component_46663';
export function Component46663({ value = 46663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46663, 'data-value': derived.doubled }, children);
}
export default Component46663;
