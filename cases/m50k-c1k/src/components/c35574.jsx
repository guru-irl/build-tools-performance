import React from 'react';
const LABEL_35574 = 'component_35574';
export function Component35574({ value = 35574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35574, 'data-value': derived.doubled }, children);
}
export default Component35574;
