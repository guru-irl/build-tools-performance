import React from 'react';
const LABEL_20688 = 'component_20688';
export function Component20688({ value = 20688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20688, 'data-value': derived.doubled }, children);
}
export default Component20688;
