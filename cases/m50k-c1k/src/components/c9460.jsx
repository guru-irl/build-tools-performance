import React from 'react';
const LABEL_9460 = 'component_9460';
export function Component9460({ value = 9460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9460, 'data-value': derived.doubled }, children);
}
export default Component9460;
