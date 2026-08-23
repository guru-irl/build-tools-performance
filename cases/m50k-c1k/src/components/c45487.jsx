import React from 'react';
const LABEL_45487 = 'component_45487';
export function Component45487({ value = 45487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45487, 'data-value': derived.doubled }, children);
}
export default Component45487;
