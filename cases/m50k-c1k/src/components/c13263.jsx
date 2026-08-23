import React from 'react';
const LABEL_13263 = 'component_13263';
export function Component13263({ value = 13263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13263, 'data-value': derived.doubled }, children);
}
export default Component13263;
