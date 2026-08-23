import React from 'react';
const LABEL_26270 = 'component_26270';
export function Component26270({ value = 26270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26270, 'data-value': derived.doubled }, children);
}
export default Component26270;
