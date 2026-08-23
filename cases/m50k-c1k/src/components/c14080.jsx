import React from 'react';
const LABEL_14080 = 'component_14080';
export function Component14080({ value = 14080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14080, 'data-value': derived.doubled }, children);
}
export default Component14080;
