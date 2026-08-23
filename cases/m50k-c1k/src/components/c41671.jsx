import React from 'react';
const LABEL_41671 = 'component_41671';
export function Component41671({ value = 41671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41671, 'data-value': derived.doubled }, children);
}
export default Component41671;
