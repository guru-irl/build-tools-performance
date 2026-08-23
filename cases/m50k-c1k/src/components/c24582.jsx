import React from 'react';
const LABEL_24582 = 'component_24582';
export function Component24582({ value = 24582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24582, 'data-value': derived.doubled }, children);
}
export default Component24582;
