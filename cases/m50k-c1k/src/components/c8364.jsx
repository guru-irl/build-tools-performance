import React from 'react';
const LABEL_8364 = 'component_8364';
export function Component8364({ value = 8364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8364, 'data-value': derived.doubled }, children);
}
export default Component8364;
