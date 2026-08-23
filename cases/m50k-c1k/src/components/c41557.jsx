import React from 'react';
const LABEL_41557 = 'component_41557';
export function Component41557({ value = 41557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41557, 'data-value': derived.doubled }, children);
}
export default Component41557;
