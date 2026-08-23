import React from 'react';
const LABEL_18168 = 'component_18168';
export function Component18168({ value = 18168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18168, 'data-value': derived.doubled }, children);
}
export default Component18168;
