import React from 'react';
const LABEL_36011 = 'component_36011';
export function Component36011({ value = 36011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36011, 'data-value': derived.doubled }, children);
}
export default Component36011;
