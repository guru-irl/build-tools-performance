import React from 'react';
const LABEL_22394 = 'component_22394';
export function Component22394({ value = 22394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22394, 'data-value': derived.doubled }, children);
}
export default Component22394;
