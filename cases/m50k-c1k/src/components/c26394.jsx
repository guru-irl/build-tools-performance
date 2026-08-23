import React from 'react';
const LABEL_26394 = 'component_26394';
export function Component26394({ value = 26394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26394, 'data-value': derived.doubled }, children);
}
export default Component26394;
