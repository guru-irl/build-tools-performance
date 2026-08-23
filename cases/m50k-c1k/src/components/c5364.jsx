import React from 'react';
const LABEL_5364 = 'component_5364';
export function Component5364({ value = 5364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5364, 'data-value': derived.doubled }, children);
}
export default Component5364;
