import React from 'react';
const LABEL_15556 = 'component_15556';
export function Component15556({ value = 15556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15556, 'data-value': derived.doubled }, children);
}
export default Component15556;
