import React from 'react';
const LABEL_31952 = 'component_31952';
export function Component31952({ value = 31952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31952, 'data-value': derived.doubled }, children);
}
export default Component31952;
