import React from 'react';
const LABEL_5569 = 'component_5569';
export function Component5569({ value = 5569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5569, 'data-value': derived.doubled }, children);
}
export default Component5569;
