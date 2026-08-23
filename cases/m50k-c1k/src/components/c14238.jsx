import React from 'react';
const LABEL_14238 = 'component_14238';
export function Component14238({ value = 14238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14238, 'data-value': derived.doubled }, children);
}
export default Component14238;
