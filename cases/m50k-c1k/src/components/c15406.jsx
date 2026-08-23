import React from 'react';
const LABEL_15406 = 'component_15406';
export function Component15406({ value = 15406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15406, 'data-value': derived.doubled }, children);
}
export default Component15406;
