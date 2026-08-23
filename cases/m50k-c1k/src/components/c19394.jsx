import React from 'react';
const LABEL_19394 = 'component_19394';
export function Component19394({ value = 19394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19394, 'data-value': derived.doubled }, children);
}
export default Component19394;
