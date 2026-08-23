import React from 'react';
const LABEL_15220 = 'component_15220';
export function Component15220({ value = 15220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15220, 'data-value': derived.doubled }, children);
}
export default Component15220;
