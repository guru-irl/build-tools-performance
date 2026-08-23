import React from 'react';
const LABEL_34969 = 'component_34969';
export function Component34969({ value = 34969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34969, 'data-value': derived.doubled }, children);
}
export default Component34969;
