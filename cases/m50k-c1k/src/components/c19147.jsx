import React from 'react';
const LABEL_19147 = 'component_19147';
export function Component19147({ value = 19147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19147, 'data-value': derived.doubled }, children);
}
export default Component19147;
