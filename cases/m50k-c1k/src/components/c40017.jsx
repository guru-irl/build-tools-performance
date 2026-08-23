import React from 'react';
const LABEL_40017 = 'component_40017';
export function Component40017({ value = 40017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40017, 'data-value': derived.doubled }, children);
}
export default Component40017;
