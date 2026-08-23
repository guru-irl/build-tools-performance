import React from 'react';
const LABEL_16299 = 'component_16299';
export function Component16299({ value = 16299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16299, 'data-value': derived.doubled }, children);
}
export default Component16299;
