import React from 'react';
const LABEL_7340 = 'component_7340';
export function Component7340({ value = 7340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7340, 'data-value': derived.doubled }, children);
}
export default Component7340;
