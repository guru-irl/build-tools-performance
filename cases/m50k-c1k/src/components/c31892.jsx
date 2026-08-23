import React from 'react';
const LABEL_31892 = 'component_31892';
export function Component31892({ value = 31892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31892, 'data-value': derived.doubled }, children);
}
export default Component31892;
