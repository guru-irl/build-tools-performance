import React from 'react';
const LABEL_4850 = 'component_4850';
export function Component4850({ value = 4850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4850, 'data-value': derived.doubled }, children);
}
export default Component4850;
