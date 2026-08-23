import React from 'react';
const LABEL_42322 = 'component_42322';
export function Component42322({ value = 42322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42322, 'data-value': derived.doubled }, children);
}
export default Component42322;
