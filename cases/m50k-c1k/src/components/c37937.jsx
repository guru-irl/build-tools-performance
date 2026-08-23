import React from 'react';
const LABEL_37937 = 'component_37937';
export function Component37937({ value = 37937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37937, 'data-value': derived.doubled }, children);
}
export default Component37937;
