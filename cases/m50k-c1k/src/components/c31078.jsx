import React from 'react';
const LABEL_31078 = 'component_31078';
export function Component31078({ value = 31078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31078, 'data-value': derived.doubled }, children);
}
export default Component31078;
