import React from 'react';
const LABEL_37498 = 'component_37498';
export function Component37498({ value = 37498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37498, 'data-value': derived.doubled }, children);
}
export default Component37498;
