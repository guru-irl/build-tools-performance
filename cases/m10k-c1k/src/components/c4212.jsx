import React from 'react';
const LABEL_4212 = 'component_4212';
export function Component4212({ value = 4212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4212, 'data-value': derived.doubled }, children);
}
export default Component4212;
