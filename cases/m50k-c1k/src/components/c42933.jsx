import React from 'react';
const LABEL_42933 = 'component_42933';
export function Component42933({ value = 42933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42933, 'data-value': derived.doubled }, children);
}
export default Component42933;
