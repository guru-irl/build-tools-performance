import React from 'react';
const LABEL_46394 = 'component_46394';
export function Component46394({ value = 46394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46394, 'data-value': derived.doubled }, children);
}
export default Component46394;
