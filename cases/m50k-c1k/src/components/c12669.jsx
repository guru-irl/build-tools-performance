import React from 'react';
const LABEL_12669 = 'component_12669';
export function Component12669({ value = 12669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12669, 'data-value': derived.doubled }, children);
}
export default Component12669;
