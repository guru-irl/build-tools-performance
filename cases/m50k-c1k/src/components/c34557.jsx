import React from 'react';
const LABEL_34557 = 'component_34557';
export function Component34557({ value = 34557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34557, 'data-value': derived.doubled }, children);
}
export default Component34557;
