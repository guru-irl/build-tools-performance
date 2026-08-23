import React from 'react';
const LABEL_19002 = 'component_19002';
export function Component19002({ value = 19002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19002, 'data-value': derived.doubled }, children);
}
export default Component19002;
