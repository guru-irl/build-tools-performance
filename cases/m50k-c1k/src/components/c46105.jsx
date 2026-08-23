import React from 'react';
const LABEL_46105 = 'component_46105';
export function Component46105({ value = 46105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46105, 'data-value': derived.doubled }, children);
}
export default Component46105;
