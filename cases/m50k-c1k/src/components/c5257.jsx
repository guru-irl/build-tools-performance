import React from 'react';
const LABEL_5257 = 'component_5257';
export function Component5257({ value = 5257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5257, 'data-value': derived.doubled }, children);
}
export default Component5257;
