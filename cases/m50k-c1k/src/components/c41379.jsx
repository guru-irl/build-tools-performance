import React from 'react';
const LABEL_41379 = 'component_41379';
export function Component41379({ value = 41379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41379, 'data-value': derived.doubled }, children);
}
export default Component41379;
