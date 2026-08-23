import React from 'react';
const LABEL_16286 = 'component_16286';
export function Component16286({ value = 16286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16286, 'data-value': derived.doubled }, children);
}
export default Component16286;
