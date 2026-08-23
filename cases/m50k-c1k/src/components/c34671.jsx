import React from 'react';
const LABEL_34671 = 'component_34671';
export function Component34671({ value = 34671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34671, 'data-value': derived.doubled }, children);
}
export default Component34671;
