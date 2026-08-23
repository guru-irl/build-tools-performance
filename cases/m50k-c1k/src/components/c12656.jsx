import React from 'react';
const LABEL_12656 = 'component_12656';
export function Component12656({ value = 12656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12656, 'data-value': derived.doubled }, children);
}
export default Component12656;
