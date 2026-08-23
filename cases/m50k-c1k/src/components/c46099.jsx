import React from 'react';
const LABEL_46099 = 'component_46099';
export function Component46099({ value = 46099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46099, 'data-value': derived.doubled }, children);
}
export default Component46099;
