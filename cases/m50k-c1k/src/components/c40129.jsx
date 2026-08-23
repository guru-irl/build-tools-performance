import React from 'react';
const LABEL_40129 = 'component_40129';
export function Component40129({ value = 40129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40129, 'data-value': derived.doubled }, children);
}
export default Component40129;
