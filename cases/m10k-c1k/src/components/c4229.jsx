import React from 'react';
const LABEL_4229 = 'component_4229';
export function Component4229({ value = 4229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4229, 'data-value': derived.doubled }, children);
}
export default Component4229;
