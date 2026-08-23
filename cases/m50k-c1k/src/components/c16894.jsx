import React from 'react';
const LABEL_16894 = 'component_16894';
export function Component16894({ value = 16894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16894, 'data-value': derived.doubled }, children);
}
export default Component16894;
