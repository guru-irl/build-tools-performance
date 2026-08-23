import React from 'react';
const LABEL_6217 = 'component_6217';
export function Component6217({ value = 6217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6217, 'data-value': derived.doubled }, children);
}
export default Component6217;
