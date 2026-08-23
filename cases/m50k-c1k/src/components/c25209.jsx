import React from 'react';
const LABEL_25209 = 'component_25209';
export function Component25209({ value = 25209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25209, 'data-value': derived.doubled }, children);
}
export default Component25209;
