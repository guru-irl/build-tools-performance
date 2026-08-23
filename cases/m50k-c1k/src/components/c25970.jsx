import React from 'react';
const LABEL_25970 = 'component_25970';
export function Component25970({ value = 25970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25970, 'data-value': derived.doubled }, children);
}
export default Component25970;
