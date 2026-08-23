import React from 'react';
const LABEL_11191 = 'component_11191';
export function Component11191({ value = 11191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11191, 'data-value': derived.doubled }, children);
}
export default Component11191;
