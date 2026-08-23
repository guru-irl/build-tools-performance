import React from 'react';
const LABEL_36687 = 'component_36687';
export function Component36687({ value = 36687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36687, 'data-value': derived.doubled }, children);
}
export default Component36687;
