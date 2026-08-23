import React from 'react';
const LABEL_25442 = 'component_25442';
export function Component25442({ value = 25442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25442, 'data-value': derived.doubled }, children);
}
export default Component25442;
