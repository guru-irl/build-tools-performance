import React from 'react';
const LABEL_37557 = 'component_37557';
export function Component37557({ value = 37557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37557, 'data-value': derived.doubled }, children);
}
export default Component37557;
