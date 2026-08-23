import React from 'react';
const LABEL_12039 = 'component_12039';
export function Component12039({ value = 12039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12039, 'data-value': derived.doubled }, children);
}
export default Component12039;
