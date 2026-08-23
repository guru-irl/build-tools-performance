import React from 'react';
const LABEL_19275 = 'component_19275';
export function Component19275({ value = 19275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19275, 'data-value': derived.doubled }, children);
}
export default Component19275;
