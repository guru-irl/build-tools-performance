import React from 'react';
const LABEL_18556 = 'component_18556';
export function Component18556({ value = 18556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18556, 'data-value': derived.doubled }, children);
}
export default Component18556;
