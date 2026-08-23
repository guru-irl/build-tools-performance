import React from 'react';
const LABEL_42693 = 'component_42693';
export function Component42693({ value = 42693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42693, 'data-value': derived.doubled }, children);
}
export default Component42693;
