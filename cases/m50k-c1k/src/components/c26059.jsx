import React from 'react';
const LABEL_26059 = 'component_26059';
export function Component26059({ value = 26059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26059, 'data-value': derived.doubled }, children);
}
export default Component26059;
