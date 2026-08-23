import React from 'react';
const LABEL_14129 = 'component_14129';
export function Component14129({ value = 14129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14129, 'data-value': derived.doubled }, children);
}
export default Component14129;
