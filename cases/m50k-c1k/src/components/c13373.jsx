import React from 'react';
const LABEL_13373 = 'component_13373';
export function Component13373({ value = 13373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13373, 'data-value': derived.doubled }, children);
}
export default Component13373;
