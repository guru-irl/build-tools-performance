import React from 'react';
const LABEL_38463 = 'component_38463';
export function Component38463({ value = 38463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38463, 'data-value': derived.doubled }, children);
}
export default Component38463;
