import React from 'react';
const LABEL_8543 = 'component_8543';
export function Component8543({ value = 8543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8543, 'data-value': derived.doubled }, children);
}
export default Component8543;
