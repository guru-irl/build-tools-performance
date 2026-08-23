import React from 'react';
const LABEL_19449 = 'component_19449';
export function Component19449({ value = 19449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19449, 'data-value': derived.doubled }, children);
}
export default Component19449;
