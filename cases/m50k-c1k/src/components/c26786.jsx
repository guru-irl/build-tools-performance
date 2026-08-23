import React from 'react';
const LABEL_26786 = 'component_26786';
export function Component26786({ value = 26786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26786, 'data-value': derived.doubled }, children);
}
export default Component26786;
