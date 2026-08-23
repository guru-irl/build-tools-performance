import React from 'react';
const LABEL_19855 = 'component_19855';
export function Component19855({ value = 19855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19855, 'data-value': derived.doubled }, children);
}
export default Component19855;
