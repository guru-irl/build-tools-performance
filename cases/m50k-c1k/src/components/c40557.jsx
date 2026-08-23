import React from 'react';
const LABEL_40557 = 'component_40557';
export function Component40557({ value = 40557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40557, 'data-value': derived.doubled }, children);
}
export default Component40557;
