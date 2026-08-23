import React from 'react';
const LABEL_6925 = 'component_6925';
export function Component6925({ value = 6925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6925, 'data-value': derived.doubled }, children);
}
export default Component6925;
