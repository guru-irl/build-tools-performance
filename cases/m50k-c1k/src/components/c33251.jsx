import React from 'react';
const LABEL_33251 = 'component_33251';
export function Component33251({ value = 33251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33251, 'data-value': derived.doubled }, children);
}
export default Component33251;
