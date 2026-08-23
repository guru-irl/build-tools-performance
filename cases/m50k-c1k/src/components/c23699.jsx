import React from 'react';
const LABEL_23699 = 'component_23699';
export function Component23699({ value = 23699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23699, 'data-value': derived.doubled }, children);
}
export default Component23699;
