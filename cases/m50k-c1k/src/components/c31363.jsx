import React from 'react';
const LABEL_31363 = 'component_31363';
export function Component31363({ value = 31363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31363, 'data-value': derived.doubled }, children);
}
export default Component31363;
