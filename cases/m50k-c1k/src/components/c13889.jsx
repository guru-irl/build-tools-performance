import React from 'react';
const LABEL_13889 = 'component_13889';
export function Component13889({ value = 13889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13889, 'data-value': derived.doubled }, children);
}
export default Component13889;
