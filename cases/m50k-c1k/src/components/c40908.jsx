import React from 'react';
const LABEL_40908 = 'component_40908';
export function Component40908({ value = 40908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40908, 'data-value': derived.doubled }, children);
}
export default Component40908;
