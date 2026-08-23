import React from 'react';
const LABEL_18969 = 'component_18969';
export function Component18969({ value = 18969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18969, 'data-value': derived.doubled }, children);
}
export default Component18969;
