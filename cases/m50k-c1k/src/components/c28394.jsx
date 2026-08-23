import React from 'react';
const LABEL_28394 = 'component_28394';
export function Component28394({ value = 28394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28394, 'data-value': derived.doubled }, children);
}
export default Component28394;
