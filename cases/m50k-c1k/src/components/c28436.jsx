import React from 'react';
const LABEL_28436 = 'component_28436';
export function Component28436({ value = 28436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28436, 'data-value': derived.doubled }, children);
}
export default Component28436;
