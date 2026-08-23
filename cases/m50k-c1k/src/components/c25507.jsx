import React from 'react';
const LABEL_25507 = 'component_25507';
export function Component25507({ value = 25507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25507, 'data-value': derived.doubled }, children);
}
export default Component25507;
