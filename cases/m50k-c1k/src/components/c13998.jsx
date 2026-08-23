import React from 'react';
const LABEL_13998 = 'component_13998';
export function Component13998({ value = 13998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13998, 'data-value': derived.doubled }, children);
}
export default Component13998;
