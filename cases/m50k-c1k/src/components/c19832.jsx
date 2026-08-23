import React from 'react';
const LABEL_19832 = 'component_19832';
export function Component19832({ value = 19832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19832, 'data-value': derived.doubled }, children);
}
export default Component19832;
