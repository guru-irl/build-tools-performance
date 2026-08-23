import React from 'react';
const LABEL_26556 = 'component_26556';
export function Component26556({ value = 26556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26556, 'data-value': derived.doubled }, children);
}
export default Component26556;
