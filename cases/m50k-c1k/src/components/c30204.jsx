import React from 'react';
const LABEL_30204 = 'component_30204';
export function Component30204({ value = 30204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30204, 'data-value': derived.doubled }, children);
}
export default Component30204;
