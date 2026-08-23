import React from 'react';
const LABEL_8186 = 'component_8186';
export function Component8186({ value = 8186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8186, 'data-value': derived.doubled }, children);
}
export default Component8186;
