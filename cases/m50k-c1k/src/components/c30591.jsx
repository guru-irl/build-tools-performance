import React from 'react';
const LABEL_30591 = 'component_30591';
export function Component30591({ value = 30591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30591, 'data-value': derived.doubled }, children);
}
export default Component30591;
