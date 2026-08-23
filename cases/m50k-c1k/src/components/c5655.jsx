import React from 'react';
const LABEL_5655 = 'component_5655';
export function Component5655({ value = 5655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5655, 'data-value': derived.doubled }, children);
}
export default Component5655;
