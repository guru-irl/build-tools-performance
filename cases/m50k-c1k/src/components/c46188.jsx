import React from 'react';
const LABEL_46188 = 'component_46188';
export function Component46188({ value = 46188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46188, 'data-value': derived.doubled }, children);
}
export default Component46188;
