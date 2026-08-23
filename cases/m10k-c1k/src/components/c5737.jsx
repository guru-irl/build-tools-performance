import React from 'react';
const LABEL_5737 = 'component_5737';
export function Component5737({ value = 5737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5737, 'data-value': derived.doubled }, children);
}
export default Component5737;
