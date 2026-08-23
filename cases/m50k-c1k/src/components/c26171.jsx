import React from 'react';
const LABEL_26171 = 'component_26171';
export function Component26171({ value = 26171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26171, 'data-value': derived.doubled }, children);
}
export default Component26171;
