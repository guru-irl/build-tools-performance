import React from 'react';
const LABEL_17240 = 'component_17240';
export function Component17240({ value = 17240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17240, 'data-value': derived.doubled }, children);
}
export default Component17240;
