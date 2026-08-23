import React from 'react';
const LABEL_349 = 'component_349';
export function Component349({ value = 349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_349, 'data-value': derived.doubled }, children);
}
export default Component349;
