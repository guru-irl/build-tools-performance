import React from 'react';
const LABEL_26492 = 'component_26492';
export function Component26492({ value = 26492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26492, 'data-value': derived.doubled }, children);
}
export default Component26492;
