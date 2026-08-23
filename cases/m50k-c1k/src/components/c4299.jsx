import React from 'react';
const LABEL_4299 = 'component_4299';
export function Component4299({ value = 4299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4299, 'data-value': derived.doubled }, children);
}
export default Component4299;
