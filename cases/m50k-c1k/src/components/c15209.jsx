import React from 'react';
const LABEL_15209 = 'component_15209';
export function Component15209({ value = 15209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15209, 'data-value': derived.doubled }, children);
}
export default Component15209;
