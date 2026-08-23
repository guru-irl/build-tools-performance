import React from 'react';
const LABEL_19895 = 'component_19895';
export function Component19895({ value = 19895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19895, 'data-value': derived.doubled }, children);
}
export default Component19895;
