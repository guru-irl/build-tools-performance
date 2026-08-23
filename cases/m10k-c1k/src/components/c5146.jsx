import React from 'react';
const LABEL_5146 = 'component_5146';
export function Component5146({ value = 5146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5146, 'data-value': derived.doubled }, children);
}
export default Component5146;
