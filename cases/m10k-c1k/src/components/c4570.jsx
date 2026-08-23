import React from 'react';
const LABEL_4570 = 'component_4570';
export function Component4570({ value = 4570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4570, 'data-value': derived.doubled }, children);
}
export default Component4570;
