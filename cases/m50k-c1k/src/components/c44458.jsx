import React from 'react';
const LABEL_44458 = 'component_44458';
export function Component44458({ value = 44458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44458, 'data-value': derived.doubled }, children);
}
export default Component44458;
