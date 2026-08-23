import React from 'react';
const LABEL_36569 = 'component_36569';
export function Component36569({ value = 36569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36569, 'data-value': derived.doubled }, children);
}
export default Component36569;
