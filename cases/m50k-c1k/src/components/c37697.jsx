import React from 'react';
const LABEL_37697 = 'component_37697';
export function Component37697({ value = 37697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37697, 'data-value': derived.doubled }, children);
}
export default Component37697;
