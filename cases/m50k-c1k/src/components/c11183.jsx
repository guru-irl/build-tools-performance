import React from 'react';
const LABEL_11183 = 'component_11183';
export function Component11183({ value = 11183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11183, 'data-value': derived.doubled }, children);
}
export default Component11183;
