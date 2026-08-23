import React from 'react';
const LABEL_8082 = 'component_8082';
export function Component8082({ value = 8082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8082, 'data-value': derived.doubled }, children);
}
export default Component8082;
