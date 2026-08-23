import React from 'react';
const LABEL_35258 = 'component_35258';
export function Component35258({ value = 35258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35258, 'data-value': derived.doubled }, children);
}
export default Component35258;
