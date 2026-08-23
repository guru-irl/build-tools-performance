import React from 'react';
const LABEL_25744 = 'component_25744';
export function Component25744({ value = 25744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25744, 'data-value': derived.doubled }, children);
}
export default Component25744;
