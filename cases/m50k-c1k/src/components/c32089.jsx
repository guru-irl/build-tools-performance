import React from 'react';
const LABEL_32089 = 'component_32089';
export function Component32089({ value = 32089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32089, 'data-value': derived.doubled }, children);
}
export default Component32089;
