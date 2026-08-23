import React from 'react';
const LABEL_42734 = 'component_42734';
export function Component42734({ value = 42734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42734, 'data-value': derived.doubled }, children);
}
export default Component42734;
