import React from 'react';
const LABEL_40971 = 'component_40971';
export function Component40971({ value = 40971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40971, 'data-value': derived.doubled }, children);
}
export default Component40971;
