import React from 'react';
const LABEL_35687 = 'component_35687';
export function Component35687({ value = 35687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35687, 'data-value': derived.doubled }, children);
}
export default Component35687;
