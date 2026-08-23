import React from 'react';
const LABEL_18687 = 'component_18687';
export function Component18687({ value = 18687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18687, 'data-value': derived.doubled }, children);
}
export default Component18687;
