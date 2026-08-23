import React from 'react';
const LABEL_19178 = 'component_19178';
export function Component19178({ value = 19178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19178, 'data-value': derived.doubled }, children);
}
export default Component19178;
