import React from 'react';
const LABEL_42741 = 'component_42741';
export function Component42741({ value = 42741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42741, 'data-value': derived.doubled }, children);
}
export default Component42741;
