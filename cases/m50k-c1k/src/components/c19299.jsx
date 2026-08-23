import React from 'react';
const LABEL_19299 = 'component_19299';
export function Component19299({ value = 19299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19299, 'data-value': derived.doubled }, children);
}
export default Component19299;
