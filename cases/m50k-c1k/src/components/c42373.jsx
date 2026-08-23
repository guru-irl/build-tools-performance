import React from 'react';
const LABEL_42373 = 'component_42373';
export function Component42373({ value = 42373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42373, 'data-value': derived.doubled }, children);
}
export default Component42373;
