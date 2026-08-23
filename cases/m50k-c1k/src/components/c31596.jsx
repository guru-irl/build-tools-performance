import React from 'react';
const LABEL_31596 = 'component_31596';
export function Component31596({ value = 31596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31596, 'data-value': derived.doubled }, children);
}
export default Component31596;
