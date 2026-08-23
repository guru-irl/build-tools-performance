import React from 'react';
const LABEL_42240 = 'component_42240';
export function Component42240({ value = 42240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42240, 'data-value': derived.doubled }, children);
}
export default Component42240;
