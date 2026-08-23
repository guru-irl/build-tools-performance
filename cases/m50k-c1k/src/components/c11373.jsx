import React from 'react';
const LABEL_11373 = 'component_11373';
export function Component11373({ value = 11373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11373, 'data-value': derived.doubled }, children);
}
export default Component11373;
