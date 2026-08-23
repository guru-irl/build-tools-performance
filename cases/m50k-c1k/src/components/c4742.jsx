import React from 'react';
const LABEL_4742 = 'component_4742';
export function Component4742({ value = 4742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4742, 'data-value': derived.doubled }, children);
}
export default Component4742;
