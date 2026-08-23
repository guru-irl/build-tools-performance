import React from 'react';
const LABEL_29144 = 'component_29144';
export function Component29144({ value = 29144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29144, 'data-value': derived.doubled }, children);
}
export default Component29144;
