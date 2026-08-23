import React from 'react';
const LABEL_42748 = 'component_42748';
export function Component42748({ value = 42748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42748, 'data-value': derived.doubled }, children);
}
export default Component42748;
