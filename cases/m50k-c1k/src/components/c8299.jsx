import React from 'react';
const LABEL_8299 = 'component_8299';
export function Component8299({ value = 8299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8299, 'data-value': derived.doubled }, children);
}
export default Component8299;
