import React from 'react';
const LABEL_19294 = 'component_19294';
export function Component19294({ value = 19294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19294, 'data-value': derived.doubled }, children);
}
export default Component19294;
