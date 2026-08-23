import React from 'react';
const LABEL_7368 = 'component_7368';
export function Component7368({ value = 7368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7368, 'data-value': derived.doubled }, children);
}
export default Component7368;
