import React from 'react';
const LABEL_13303 = 'component_13303';
export function Component13303({ value = 13303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13303, 'data-value': derived.doubled }, children);
}
export default Component13303;
