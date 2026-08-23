import React from 'react';
const LABEL_31463 = 'component_31463';
export function Component31463({ value = 31463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31463, 'data-value': derived.doubled }, children);
}
export default Component31463;
