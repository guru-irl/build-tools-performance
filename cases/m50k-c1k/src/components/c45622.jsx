import React from 'react';
const LABEL_45622 = 'component_45622';
export function Component45622({ value = 45622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45622, 'data-value': derived.doubled }, children);
}
export default Component45622;
