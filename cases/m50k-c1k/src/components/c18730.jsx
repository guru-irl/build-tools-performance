import React from 'react';
const LABEL_18730 = 'component_18730';
export function Component18730({ value = 18730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18730, 'data-value': derived.doubled }, children);
}
export default Component18730;
