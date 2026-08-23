import React from 'react';
const LABEL_14615 = 'component_14615';
export function Component14615({ value = 14615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14615, 'data-value': derived.doubled }, children);
}
export default Component14615;
