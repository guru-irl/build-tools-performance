import React from 'react';
const LABEL_18937 = 'component_18937';
export function Component18937({ value = 18937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18937, 'data-value': derived.doubled }, children);
}
export default Component18937;
