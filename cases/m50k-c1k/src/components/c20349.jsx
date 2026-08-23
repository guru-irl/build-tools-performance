import React from 'react';
const LABEL_20349 = 'component_20349';
export function Component20349({ value = 20349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20349, 'data-value': derived.doubled }, children);
}
export default Component20349;
