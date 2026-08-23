import React from 'react';
const LABEL_5656 = 'component_5656';
export function Component5656({ value = 5656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5656, 'data-value': derived.doubled }, children);
}
export default Component5656;
