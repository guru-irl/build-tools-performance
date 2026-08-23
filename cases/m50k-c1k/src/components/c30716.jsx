import React from 'react';
const LABEL_30716 = 'component_30716';
export function Component30716({ value = 30716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30716, 'data-value': derived.doubled }, children);
}
export default Component30716;
