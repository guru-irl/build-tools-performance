import React from 'react';
const LABEL_42143 = 'component_42143';
export function Component42143({ value = 42143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42143, 'data-value': derived.doubled }, children);
}
export default Component42143;
