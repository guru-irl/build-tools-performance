import React from 'react';
const LABEL_18328 = 'component_18328';
export function Component18328({ value = 18328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18328, 'data-value': derived.doubled }, children);
}
export default Component18328;
