import React from 'react';
const LABEL_46248 = 'component_46248';
export function Component46248({ value = 46248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46248, 'data-value': derived.doubled }, children);
}
export default Component46248;
