import React from 'react';
const LABEL_44954 = 'component_44954';
export function Component44954({ value = 44954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44954, 'data-value': derived.doubled }, children);
}
export default Component44954;
