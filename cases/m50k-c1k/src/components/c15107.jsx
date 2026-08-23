import React from 'react';
const LABEL_15107 = 'component_15107';
export function Component15107({ value = 15107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15107, 'data-value': derived.doubled }, children);
}
export default Component15107;
