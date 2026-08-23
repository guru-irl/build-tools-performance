import React from 'react';
const LABEL_4248 = 'component_4248';
export function Component4248({ value = 4248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4248, 'data-value': derived.doubled }, children);
}
export default Component4248;
