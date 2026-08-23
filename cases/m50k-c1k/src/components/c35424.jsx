import React from 'react';
const LABEL_35424 = 'component_35424';
export function Component35424({ value = 35424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35424, 'data-value': derived.doubled }, children);
}
export default Component35424;
