import React from 'react';
const LABEL_13279 = 'component_13279';
export function Component13279({ value = 13279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13279, 'data-value': derived.doubled }, children);
}
export default Component13279;
