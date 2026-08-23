import React from 'react';
const LABEL_26866 = 'component_26866';
export function Component26866({ value = 26866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26866, 'data-value': derived.doubled }, children);
}
export default Component26866;
