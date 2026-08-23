import React from 'react';
const LABEL_6257 = 'component_6257';
export function Component6257({ value = 6257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6257, 'data-value': derived.doubled }, children);
}
export default Component6257;
