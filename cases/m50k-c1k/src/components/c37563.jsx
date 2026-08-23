import React from 'react';
const LABEL_37563 = 'component_37563';
export function Component37563({ value = 37563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37563, 'data-value': derived.doubled }, children);
}
export default Component37563;
