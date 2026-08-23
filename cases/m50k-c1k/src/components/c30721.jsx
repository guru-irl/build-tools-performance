import React from 'react';
const LABEL_30721 = 'component_30721';
export function Component30721({ value = 30721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30721, 'data-value': derived.doubled }, children);
}
export default Component30721;
