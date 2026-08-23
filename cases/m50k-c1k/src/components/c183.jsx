import React from 'react';
const LABEL_183 = 'component_183';
export function Component183({ value = 183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_183, 'data-value': derived.doubled }, children);
}
export default Component183;
