import React from 'react';
const LABEL_6260 = 'component_6260';
export function Component6260({ value = 6260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6260, 'data-value': derived.doubled }, children);
}
export default Component6260;
