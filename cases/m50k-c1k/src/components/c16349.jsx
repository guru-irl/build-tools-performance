import React from 'react';
const LABEL_16349 = 'component_16349';
export function Component16349({ value = 16349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16349, 'data-value': derived.doubled }, children);
}
export default Component16349;
