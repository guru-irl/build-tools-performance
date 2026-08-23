import React from 'react';
const LABEL_8645 = 'component_8645';
export function Component8645({ value = 8645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8645, 'data-value': derived.doubled }, children);
}
export default Component8645;
