import React from 'react';
const LABEL_42956 = 'component_42956';
export function Component42956({ value = 42956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42956, 'data-value': derived.doubled }, children);
}
export default Component42956;
