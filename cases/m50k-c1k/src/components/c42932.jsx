import React from 'react';
const LABEL_42932 = 'component_42932';
export function Component42932({ value = 42932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42932, 'data-value': derived.doubled }, children);
}
export default Component42932;
