import React from 'react';
const LABEL_41935 = 'component_41935';
export function Component41935({ value = 41935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41935, 'data-value': derived.doubled }, children);
}
export default Component41935;
