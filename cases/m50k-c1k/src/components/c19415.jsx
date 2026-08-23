import React from 'react';
const LABEL_19415 = 'component_19415';
export function Component19415({ value = 19415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19415, 'data-value': derived.doubled }, children);
}
export default Component19415;
