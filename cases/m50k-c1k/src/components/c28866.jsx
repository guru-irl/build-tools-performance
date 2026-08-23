import React from 'react';
const LABEL_28866 = 'component_28866';
export function Component28866({ value = 28866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28866, 'data-value': derived.doubled }, children);
}
export default Component28866;
