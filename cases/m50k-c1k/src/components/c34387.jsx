import React from 'react';
const LABEL_34387 = 'component_34387';
export function Component34387({ value = 34387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34387, 'data-value': derived.doubled }, children);
}
export default Component34387;
