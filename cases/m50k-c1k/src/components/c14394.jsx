import React from 'react';
const LABEL_14394 = 'component_14394';
export function Component14394({ value = 14394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14394, 'data-value': derived.doubled }, children);
}
export default Component14394;
