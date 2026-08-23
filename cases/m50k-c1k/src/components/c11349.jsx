import React from 'react';
const LABEL_11349 = 'component_11349';
export function Component11349({ value = 11349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11349, 'data-value': derived.doubled }, children);
}
export default Component11349;
