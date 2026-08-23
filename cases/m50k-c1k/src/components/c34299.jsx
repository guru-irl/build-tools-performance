import React from 'react';
const LABEL_34299 = 'component_34299';
export function Component34299({ value = 34299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34299, 'data-value': derived.doubled }, children);
}
export default Component34299;
