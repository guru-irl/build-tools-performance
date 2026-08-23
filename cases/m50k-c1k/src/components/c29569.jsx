import React from 'react';
const LABEL_29569 = 'component_29569';
export function Component29569({ value = 29569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29569, 'data-value': derived.doubled }, children);
}
export default Component29569;
