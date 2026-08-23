import React from 'react';
const LABEL_25463 = 'component_25463';
export function Component25463({ value = 25463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25463, 'data-value': derived.doubled }, children);
}
export default Component25463;
