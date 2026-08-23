import React from 'react';
const LABEL_40423 = 'component_40423';
export function Component40423({ value = 40423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40423, 'data-value': derived.doubled }, children);
}
export default Component40423;
