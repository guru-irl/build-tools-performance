import React from 'react';
const LABEL_29799 = 'component_29799';
export function Component29799({ value = 29799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29799, 'data-value': derived.doubled }, children);
}
export default Component29799;
