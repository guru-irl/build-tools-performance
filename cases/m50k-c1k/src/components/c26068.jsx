import React from 'react';
const LABEL_26068 = 'component_26068';
export function Component26068({ value = 26068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26068, 'data-value': derived.doubled }, children);
}
export default Component26068;
