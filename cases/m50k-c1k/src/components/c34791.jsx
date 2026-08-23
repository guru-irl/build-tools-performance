import React from 'react';
const LABEL_34791 = 'component_34791';
export function Component34791({ value = 34791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34791, 'data-value': derived.doubled }, children);
}
export default Component34791;
