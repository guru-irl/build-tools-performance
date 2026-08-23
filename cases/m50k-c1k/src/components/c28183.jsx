import React from 'react';
const LABEL_28183 = 'component_28183';
export function Component28183({ value = 28183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28183, 'data-value': derived.doubled }, children);
}
export default Component28183;
