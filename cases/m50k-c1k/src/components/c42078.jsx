import React from 'react';
const LABEL_42078 = 'component_42078';
export function Component42078({ value = 42078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42078, 'data-value': derived.doubled }, children);
}
export default Component42078;
