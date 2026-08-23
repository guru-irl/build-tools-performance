import React from 'react';
const LABEL_41129 = 'component_41129';
export function Component41129({ value = 41129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41129, 'data-value': derived.doubled }, children);
}
export default Component41129;
