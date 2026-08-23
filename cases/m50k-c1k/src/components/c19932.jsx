import React from 'react';
const LABEL_19932 = 'component_19932';
export function Component19932({ value = 19932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19932, 'data-value': derived.doubled }, children);
}
export default Component19932;
