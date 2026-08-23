import React from 'react';
const LABEL_34556 = 'component_34556';
export function Component34556({ value = 34556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34556, 'data-value': derived.doubled }, children);
}
export default Component34556;
