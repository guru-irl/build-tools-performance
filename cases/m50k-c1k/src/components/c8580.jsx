import React from 'react';
const LABEL_8580 = 'component_8580';
export function Component8580({ value = 8580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8580, 'data-value': derived.doubled }, children);
}
export default Component8580;
