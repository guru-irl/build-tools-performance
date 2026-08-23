import React from 'react';
const LABEL_25734 = 'component_25734';
export function Component25734({ value = 25734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25734, 'data-value': derived.doubled }, children);
}
export default Component25734;
