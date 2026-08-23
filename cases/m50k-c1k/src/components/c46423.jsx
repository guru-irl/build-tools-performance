import React from 'react';
const LABEL_46423 = 'component_46423';
export function Component46423({ value = 46423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46423, 'data-value': derived.doubled }, children);
}
export default Component46423;
