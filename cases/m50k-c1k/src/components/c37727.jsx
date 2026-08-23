import React from 'react';
const LABEL_37727 = 'component_37727';
export function Component37727({ value = 37727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37727, 'data-value': derived.doubled }, children);
}
export default Component37727;
