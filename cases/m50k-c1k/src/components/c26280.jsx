import React from 'react';
const LABEL_26280 = 'component_26280';
export function Component26280({ value = 26280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26280, 'data-value': derived.doubled }, children);
}
export default Component26280;
