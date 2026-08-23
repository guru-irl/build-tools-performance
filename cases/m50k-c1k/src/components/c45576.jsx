import React from 'react';
const LABEL_45576 = 'component_45576';
export function Component45576({ value = 45576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45576, 'data-value': derived.doubled }, children);
}
export default Component45576;
