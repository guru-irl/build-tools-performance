import React from 'react';
const LABEL_41710 = 'component_41710';
export function Component41710({ value = 41710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41710, 'data-value': derived.doubled }, children);
}
export default Component41710;
