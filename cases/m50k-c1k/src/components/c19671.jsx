import React from 'react';
const LABEL_19671 = 'component_19671';
export function Component19671({ value = 19671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19671, 'data-value': derived.doubled }, children);
}
export default Component19671;
