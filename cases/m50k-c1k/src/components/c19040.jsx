import React from 'react';
const LABEL_19040 = 'component_19040';
export function Component19040({ value = 19040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19040, 'data-value': derived.doubled }, children);
}
export default Component19040;
