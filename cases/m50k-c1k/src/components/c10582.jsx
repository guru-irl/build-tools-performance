import React from 'react';
const LABEL_10582 = 'component_10582';
export function Component10582({ value = 10582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10582, 'data-value': derived.doubled }, children);
}
export default Component10582;
