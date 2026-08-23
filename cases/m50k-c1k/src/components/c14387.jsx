import React from 'react';
const LABEL_14387 = 'component_14387';
export function Component14387({ value = 14387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14387, 'data-value': derived.doubled }, children);
}
export default Component14387;
