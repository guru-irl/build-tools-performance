import React from 'react';
const LABEL_28770 = 'component_28770';
export function Component28770({ value = 28770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28770, 'data-value': derived.doubled }, children);
}
export default Component28770;
