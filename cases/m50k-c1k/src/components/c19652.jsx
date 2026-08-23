import React from 'react';
const LABEL_19652 = 'component_19652';
export function Component19652({ value = 19652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19652, 'data-value': derived.doubled }, children);
}
export default Component19652;
