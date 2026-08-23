import React from 'react';
const LABEL_42388 = 'component_42388';
export function Component42388({ value = 42388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42388, 'data-value': derived.doubled }, children);
}
export default Component42388;
