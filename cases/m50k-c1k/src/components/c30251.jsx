import React from 'react';
const LABEL_30251 = 'component_30251';
export function Component30251({ value = 30251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30251, 'data-value': derived.doubled }, children);
}
export default Component30251;
