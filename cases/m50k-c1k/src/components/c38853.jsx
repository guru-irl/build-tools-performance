import React from 'react';
const LABEL_38853 = 'component_38853';
export function Component38853({ value = 38853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38853, 'data-value': derived.doubled }, children);
}
export default Component38853;
