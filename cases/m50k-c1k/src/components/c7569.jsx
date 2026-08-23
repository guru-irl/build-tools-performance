import React from 'react';
const LABEL_7569 = 'component_7569';
export function Component7569({ value = 7569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7569, 'data-value': derived.doubled }, children);
}
export default Component7569;
