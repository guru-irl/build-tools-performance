import React from 'react';
const LABEL_26230 = 'component_26230';
export function Component26230({ value = 26230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26230, 'data-value': derived.doubled }, children);
}
export default Component26230;
