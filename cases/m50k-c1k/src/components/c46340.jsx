import React from 'react';
const LABEL_46340 = 'component_46340';
export function Component46340({ value = 46340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46340, 'data-value': derived.doubled }, children);
}
export default Component46340;
