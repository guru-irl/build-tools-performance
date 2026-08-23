import React from 'react';
const LABEL_32894 = 'component_32894';
export function Component32894({ value = 32894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32894, 'data-value': derived.doubled }, children);
}
export default Component32894;
