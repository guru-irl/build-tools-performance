import React from 'react';
const LABEL_15491 = 'component_15491';
export function Component15491({ value = 15491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15491, 'data-value': derived.doubled }, children);
}
export default Component15491;
