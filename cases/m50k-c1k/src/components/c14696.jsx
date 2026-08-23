import React from 'react';
const LABEL_14696 = 'component_14696';
export function Component14696({ value = 14696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14696, 'data-value': derived.doubled }, children);
}
export default Component14696;
