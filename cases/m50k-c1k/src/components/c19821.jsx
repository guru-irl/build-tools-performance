import React from 'react';
const LABEL_19821 = 'component_19821';
export function Component19821({ value = 19821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19821, 'data-value': derived.doubled }, children);
}
export default Component19821;
