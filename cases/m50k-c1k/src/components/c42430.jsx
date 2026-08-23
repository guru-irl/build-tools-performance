import React from 'react';
const LABEL_42430 = 'component_42430';
export function Component42430({ value = 42430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42430, 'data-value': derived.doubled }, children);
}
export default Component42430;
