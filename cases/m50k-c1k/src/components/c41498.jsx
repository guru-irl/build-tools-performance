import React from 'react';
const LABEL_41498 = 'component_41498';
export function Component41498({ value = 41498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41498, 'data-value': derived.doubled }, children);
}
export default Component41498;
