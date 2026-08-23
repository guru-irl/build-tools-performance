import React from 'react';
const LABEL_25996 = 'component_25996';
export function Component25996({ value = 25996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25996, 'data-value': derived.doubled }, children);
}
export default Component25996;
