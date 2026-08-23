import React from 'react';
const LABEL_26349 = 'component_26349';
export function Component26349({ value = 26349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26349, 'data-value': derived.doubled }, children);
}
export default Component26349;
