import React from 'react';
const LABEL_28263 = 'component_28263';
export function Component28263({ value = 28263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28263, 'data-value': derived.doubled }, children);
}
export default Component28263;
