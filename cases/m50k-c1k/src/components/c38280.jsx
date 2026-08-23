import React from 'react';
const LABEL_38280 = 'component_38280';
export function Component38280({ value = 38280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38280, 'data-value': derived.doubled }, children);
}
export default Component38280;
