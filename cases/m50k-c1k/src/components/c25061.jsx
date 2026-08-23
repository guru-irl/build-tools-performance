import React from 'react';
const LABEL_25061 = 'component_25061';
export function Component25061({ value = 25061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25061, 'data-value': derived.doubled }, children);
}
export default Component25061;
