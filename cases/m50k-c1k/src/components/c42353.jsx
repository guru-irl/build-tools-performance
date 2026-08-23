import React from 'react';
const LABEL_42353 = 'component_42353';
export function Component42353({ value = 42353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42353, 'data-value': derived.doubled }, children);
}
export default Component42353;
