import React from 'react';
const LABEL_26466 = 'component_26466';
export function Component26466({ value = 26466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26466, 'data-value': derived.doubled }, children);
}
export default Component26466;
