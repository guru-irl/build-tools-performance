import React from 'react';
const LABEL_46671 = 'component_46671';
export function Component46671({ value = 46671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46671, 'data-value': derived.doubled }, children);
}
export default Component46671;
