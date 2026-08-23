import React from 'react';
const LABEL_31937 = 'component_31937';
export function Component31937({ value = 31937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31937, 'data-value': derived.doubled }, children);
}
export default Component31937;
