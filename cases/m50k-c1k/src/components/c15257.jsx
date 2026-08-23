import React from 'react';
const LABEL_15257 = 'component_15257';
export function Component15257({ value = 15257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15257, 'data-value': derived.doubled }, children);
}
export default Component15257;
