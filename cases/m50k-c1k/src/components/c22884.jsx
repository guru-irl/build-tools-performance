import React from 'react';
const LABEL_22884 = 'component_22884';
export function Component22884({ value = 22884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22884, 'data-value': derived.doubled }, children);
}
export default Component22884;
