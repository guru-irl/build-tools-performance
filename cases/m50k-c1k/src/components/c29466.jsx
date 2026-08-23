import React from 'react';
const LABEL_29466 = 'component_29466';
export function Component29466({ value = 29466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29466, 'data-value': derived.doubled }, children);
}
export default Component29466;
