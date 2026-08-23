import React from 'react';
const LABEL_35940 = 'component_35940';
export function Component35940({ value = 35940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35940, 'data-value': derived.doubled }, children);
}
export default Component35940;
