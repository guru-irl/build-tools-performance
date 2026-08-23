import React from 'react';
const LABEL_28772 = 'component_28772';
export function Component28772({ value = 28772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28772, 'data-value': derived.doubled }, children);
}
export default Component28772;
