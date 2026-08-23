import React from 'react';
const LABEL_4687 = 'component_4687';
export function Component4687({ value = 4687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4687, 'data-value': derived.doubled }, children);
}
export default Component4687;
