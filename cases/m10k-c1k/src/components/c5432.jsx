import React from 'react';
const LABEL_5432 = 'component_5432';
export function Component5432({ value = 5432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5432, 'data-value': derived.doubled }, children);
}
export default Component5432;
