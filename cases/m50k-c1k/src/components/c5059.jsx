import React from 'react';
const LABEL_5059 = 'component_5059';
export function Component5059({ value = 5059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5059, 'data-value': derived.doubled }, children);
}
export default Component5059;
