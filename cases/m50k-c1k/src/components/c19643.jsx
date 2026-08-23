import React from 'react';
const LABEL_19643 = 'component_19643';
export function Component19643({ value = 19643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19643, 'data-value': derived.doubled }, children);
}
export default Component19643;
