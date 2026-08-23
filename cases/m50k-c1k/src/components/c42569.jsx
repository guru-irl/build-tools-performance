import React from 'react';
const LABEL_42569 = 'component_42569';
export function Component42569({ value = 42569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42569, 'data-value': derived.doubled }, children);
}
export default Component42569;
