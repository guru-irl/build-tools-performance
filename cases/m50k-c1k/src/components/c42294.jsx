import React from 'react';
const LABEL_42294 = 'component_42294';
export function Component42294({ value = 42294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42294, 'data-value': derived.doubled }, children);
}
export default Component42294;
