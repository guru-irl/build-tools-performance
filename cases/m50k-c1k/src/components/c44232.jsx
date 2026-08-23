import React from 'react';
const LABEL_44232 = 'component_44232';
export function Component44232({ value = 44232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44232, 'data-value': derived.doubled }, children);
}
export default Component44232;
