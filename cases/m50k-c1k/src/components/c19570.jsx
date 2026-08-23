import React from 'react';
const LABEL_19570 = 'component_19570';
export function Component19570({ value = 19570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19570, 'data-value': derived.doubled }, children);
}
export default Component19570;
