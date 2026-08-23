import React from 'react';
const LABEL_35344 = 'component_35344';
export function Component35344({ value = 35344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35344, 'data-value': derived.doubled }, children);
}
export default Component35344;
