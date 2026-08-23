import React from 'react';
const LABEL_5349 = 'component_5349';
export function Component5349({ value = 5349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5349, 'data-value': derived.doubled }, children);
}
export default Component5349;
