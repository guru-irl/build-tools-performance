import React from 'react';
const LABEL_9770 = 'component_9770';
export function Component9770({ value = 9770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9770, 'data-value': derived.doubled }, children);
}
export default Component9770;
