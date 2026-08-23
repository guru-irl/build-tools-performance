import React from 'react';
const LABEL_26299 = 'component_26299';
export function Component26299({ value = 26299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26299, 'data-value': derived.doubled }, children);
}
export default Component26299;
