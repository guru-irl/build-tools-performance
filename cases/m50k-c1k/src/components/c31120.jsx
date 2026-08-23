import React from 'react';
const LABEL_31120 = 'component_31120';
export function Component31120({ value = 31120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31120, 'data-value': derived.doubled }, children);
}
export default Component31120;
