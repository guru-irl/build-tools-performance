import React from 'react';
const LABEL_42473 = 'component_42473';
export function Component42473({ value = 42473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42473, 'data-value': derived.doubled }, children);
}
export default Component42473;
