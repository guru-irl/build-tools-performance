import React from 'react';
const LABEL_18105 = 'component_18105';
export function Component18105({ value = 18105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18105, 'data-value': derived.doubled }, children);
}
export default Component18105;
