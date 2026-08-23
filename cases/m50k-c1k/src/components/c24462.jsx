import React from 'react';
const LABEL_24462 = 'component_24462';
export function Component24462({ value = 24462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24462, 'data-value': derived.doubled }, children);
}
export default Component24462;
