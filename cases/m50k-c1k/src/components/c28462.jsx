import React from 'react';
const LABEL_28462 = 'component_28462';
export function Component28462({ value = 28462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28462, 'data-value': derived.doubled }, children);
}
export default Component28462;
