import React from 'react';
const LABEL_40298 = 'component_40298';
export function Component40298({ value = 40298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40298, 'data-value': derived.doubled }, children);
}
export default Component40298;
