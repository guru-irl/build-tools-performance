import React from 'react';
const LABEL_34328 = 'component_34328';
export function Component34328({ value = 34328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34328, 'data-value': derived.doubled }, children);
}
export default Component34328;
