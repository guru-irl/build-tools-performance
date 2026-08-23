import React from 'react';
const LABEL_35804 = 'component_35804';
export function Component35804({ value = 35804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35804, 'data-value': derived.doubled }, children);
}
export default Component35804;
