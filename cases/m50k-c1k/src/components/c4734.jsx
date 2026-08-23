import React from 'react';
const LABEL_4734 = 'component_4734';
export function Component4734({ value = 4734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4734, 'data-value': derived.doubled }, children);
}
export default Component4734;
