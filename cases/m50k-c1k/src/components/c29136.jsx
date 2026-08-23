import React from 'react';
const LABEL_29136 = 'component_29136';
export function Component29136({ value = 29136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29136, 'data-value': derived.doubled }, children);
}
export default Component29136;
