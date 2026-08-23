import React from 'react';
const LABEL_31594 = 'component_31594';
export function Component31594({ value = 31594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31594, 'data-value': derived.doubled }, children);
}
export default Component31594;
