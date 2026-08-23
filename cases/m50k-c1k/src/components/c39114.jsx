import React from 'react';
const LABEL_39114 = 'component_39114';
export function Component39114({ value = 39114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39114, 'data-value': derived.doubled }, children);
}
export default Component39114;
