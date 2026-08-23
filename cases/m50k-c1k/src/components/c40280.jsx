import React from 'react';
const LABEL_40280 = 'component_40280';
export function Component40280({ value = 40280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40280, 'data-value': derived.doubled }, children);
}
export default Component40280;
