import React from 'react';
const LABEL_42520 = 'component_42520';
export function Component42520({ value = 42520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42520, 'data-value': derived.doubled }, children);
}
export default Component42520;
