import React from 'react';
const LABEL_46300 = 'component_46300';
export function Component46300({ value = 46300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46300, 'data-value': derived.doubled }, children);
}
export default Component46300;
