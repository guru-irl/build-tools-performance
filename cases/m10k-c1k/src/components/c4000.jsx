import React from 'react';
const LABEL_4000 = 'component_4000';
export function Component4000({ value = 4000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4000, 'data-value': derived.doubled }, children);
}
export default Component4000;
