import React from 'react';
const LABEL_44131 = 'component_44131';
export function Component44131({ value = 44131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44131, 'data-value': derived.doubled }, children);
}
export default Component44131;
