import React from 'react';
const LABEL_32580 = 'component_32580';
export function Component32580({ value = 32580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32580, 'data-value': derived.doubled }, children);
}
export default Component32580;
