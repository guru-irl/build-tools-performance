import React from 'react';
const LABEL_19466 = 'component_19466';
export function Component19466({ value = 19466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19466, 'data-value': derived.doubled }, children);
}
export default Component19466;
