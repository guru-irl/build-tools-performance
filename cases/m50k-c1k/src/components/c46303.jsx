import React from 'react';
const LABEL_46303 = 'component_46303';
export function Component46303({ value = 46303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46303, 'data-value': derived.doubled }, children);
}
export default Component46303;
