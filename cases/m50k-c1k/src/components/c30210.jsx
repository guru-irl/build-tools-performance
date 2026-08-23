import React from 'react';
const LABEL_30210 = 'component_30210';
export function Component30210({ value = 30210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30210, 'data-value': derived.doubled }, children);
}
export default Component30210;
