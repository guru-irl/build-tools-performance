import React from 'react';
const LABEL_26076 = 'component_26076';
export function Component26076({ value = 26076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26076, 'data-value': derived.doubled }, children);
}
export default Component26076;
