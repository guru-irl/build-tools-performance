import React from 'react';
const LABEL_394 = 'component_394';
export function Component394({ value = 394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_394, 'data-value': derived.doubled }, children);
}
export default Component394;
