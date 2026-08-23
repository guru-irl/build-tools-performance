import React from 'react';
const LABEL_8791 = 'component_8791';
export function Component8791({ value = 8791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8791, 'data-value': derived.doubled }, children);
}
export default Component8791;
