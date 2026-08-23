import React from 'react';
const LABEL_28570 = 'component_28570';
export function Component28570({ value = 28570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28570, 'data-value': derived.doubled }, children);
}
export default Component28570;
