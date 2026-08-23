import React from 'react';
const LABEL_14303 = 'component_14303';
export function Component14303({ value = 14303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14303, 'data-value': derived.doubled }, children);
}
export default Component14303;
