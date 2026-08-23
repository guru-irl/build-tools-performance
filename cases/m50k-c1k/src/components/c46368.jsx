import React from 'react';
const LABEL_46368 = 'component_46368';
export function Component46368({ value = 46368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46368, 'data-value': derived.doubled }, children);
}
export default Component46368;
