import React from 'react';
const LABEL_14424 = 'component_14424';
export function Component14424({ value = 14424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14424, 'data-value': derived.doubled }, children);
}
export default Component14424;
