import React from 'react';
const LABEL_24973 = 'component_24973';
export function Component24973({ value = 24973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24973, 'data-value': derived.doubled }, children);
}
export default Component24973;
