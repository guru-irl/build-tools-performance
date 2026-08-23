import React from 'react';
const LABEL_5770 = 'component_5770';
export function Component5770({ value = 5770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5770, 'data-value': derived.doubled }, children);
}
export default Component5770;
