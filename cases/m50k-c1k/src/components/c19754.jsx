import React from 'react';
const LABEL_19754 = 'component_19754';
export function Component19754({ value = 19754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19754, 'data-value': derived.doubled }, children);
}
export default Component19754;
