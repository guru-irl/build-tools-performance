import React from 'react';
const LABEL_37895 = 'component_37895';
export function Component37895({ value = 37895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37895, 'data-value': derived.doubled }, children);
}
export default Component37895;
