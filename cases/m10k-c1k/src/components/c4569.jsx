import React from 'react';
const LABEL_4569 = 'component_4569';
export function Component4569({ value = 4569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4569, 'data-value': derived.doubled }, children);
}
export default Component4569;
