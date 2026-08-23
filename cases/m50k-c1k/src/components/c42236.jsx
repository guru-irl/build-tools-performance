import React from 'react';
const LABEL_42236 = 'component_42236';
export function Component42236({ value = 42236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42236, 'data-value': derived.doubled }, children);
}
export default Component42236;
